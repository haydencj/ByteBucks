const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
	AccountId,
	PrivateKey,
	Client,
	TokenCreateTransaction,
	TokenType,
	TokenSupplyType,
	TransferTransaction,
	AccountBalanceQuery,
	TokenAssociateTransaction,
    AccountCreateTransaction,
    Hbar
} = require("@hashgraph/sdk");

const config = require('../utils/config');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).send('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        const client = Client.forTestnet();
        client.setOperator(config.ACCOUNT_ID, config.PRIVATE_KEY);

        // Create new keys
        const newAccountPrivateKey = PrivateKey.generateED25519();
        const newAccountPublicKey = newAccountPrivateKey.publicKey;

        // Create new account with 1000 tiny bar starting balance
        const transaction = await new AccountCreateTransaction()
            .setKey(newAccountPublicKey)
            .setInitialBalance(Hbar.fromTinybars(1000)) 
            .execute(client);

        // Get new account id
        const getReceipt = await transaction.getReceipt(client);
        const newAccountId = getReceipt.accountId;

        // Assuming the tokenId for ByteBucks is known
        const tokenId = config.TOKEN_ID;

        //TOKEN ASSOCIATION WITH NEW ACCOUNT
        let associateNewAccountTx = await new TokenAssociateTransaction()
            .setAccountId(newAccountId)
            .setTokenIds([tokenId])
            .freezeWith(client)
            .sign(newAccountPrivateKey);

        //SUBMIT THE TRANSACTION
        let associatenewAccountTxSubmit = await associateNewAccountTx.execute(client);

        //GET THE RECEIPT OF THE TRANSACTION
        let associateNewAccountRx = await associatenewAccountTxSubmit.getReceipt(client);

        //LOG THE TRANSACTION STATUS
        console.log(`- Token association with new account: ${associateNewAccountRx.status}\n`);



        //BALANCE CHECK
        var balanceCheckTx = await new AccountBalanceQuery().setAccountId(config.ACCOUNT_ID).execute(client);
        console.log(`- Treasury balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);
        var balanceCheckTx = await new AccountBalanceQuery().setAccountId(newAccountId).execute(client);
        console.log(`- New account's balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);

        // TRANSFER BYTEBUCKS FROM TREASURY TO NEW ACCOUNT
        let tokenTransferTx = await new TransferTransaction()
            .addTokenTransfer(tokenId, config.ACCOUNT_ID, -10)
            .addTokenTransfer(tokenId, newAccountId, 10)
            .freezeWith(client)
            .sign(PrivateKey.fromString(config.PRIVATE_KEY));

        //SUBMIT THE TRANSACTION
        let tokenTransferSubmit = await tokenTransferTx.execute(client);

        //GET THE RECEIPT OF THE TRANSACTION
        let tokenTransferRx = await tokenTransferSubmit.getReceipt(client);

        //LOG THE TRANSACTION STATUS
        console.log(`\n- Byte bucks transfer from Treasury to new account: ${tokenTransferRx.status} \n`);

        // BALANCE CHECK
        var balanceCheckTx = await new AccountBalanceQuery().setAccountId(config.ACCOUNT_ID).execute(client);
        console.log(`- Treasury balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);
        var balanceCheckTx = await new AccountBalanceQuery().setAccountId(newAccountId).execute(client);
        console.log(`- New account's balance: ${balanceCheckTx.tokens._map.get(tokenId.toString())} units of token ID ${tokenId}`);



        const user = new User({
            email,
            password: hashedPassword,
            accountId: newAccountId.toString(),
            byteBucks: balanceCheckTx.tokens._map.get(tokenId.toString())
        });

        await user.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Invalid credentials');

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ _id: user._id }, config.JWT_SECRET);

        res.json({ token, accountId: user.accountId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
