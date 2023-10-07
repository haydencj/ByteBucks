//Imports
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // TODO: Add validations here

    try {
        const userExists = await User.findOne({ username });
        if (userExists) return res.status(400).send('Username already exists');

        const user = new User({ username, password });
        await user.save();

        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
