const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client, AccountCreateTransaction, Hbar, TokenAssociateTransaction, TokenId } = require('@hashgraph/sdk');

const config = require('../utils/config');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).send('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        const client = Client.forTestnet();
        client.setOperator(config.ACCOUNT_ID, config.PRIVATE_KEY);

        const transaction = await new AccountCreateTransaction()
            .setInitialBalance(new Hbar(2)) 
            .execute(client);

        const receipt = await transaction.getReceipt(client);
        const accountId = receipt.accountId;

        // Assuming the tokenId for ByteBucks is known
        const tokenId = TokenId.fromString(config.TOKEN_ID); 

        // Associating the new account with ByteBucks token
        await new TokenAssociateTransaction()
            .setAccountId(accountId)
            .setTokenIds([tokenId])
            .execute(client);

        const user = new User({
            username,
            password: hashedPassword,
            hederaAccountId: accountId.toString(),
            byteBucks: 10 // Giving 10 ByteBucks for registering
        });

        await user.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send('Invalid credentials');

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ _id: user._id }, config.JWT_SECRET);

        res.json({ token, hederaAccountId: user.hederaAccountId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
