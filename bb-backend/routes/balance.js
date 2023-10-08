const express = require('express');
const User = require('../models/User');
const config = require('../utils/config');
const authMiddleware = require('../utils/authMiddleware'); // Import the auth middleware
const router = express.Router();

router.get('/balance', authMiddleware, async (req, res) => {  // Add middleware here
    try {
        //console.log('Balance request received');  // Log when a request is received

        const userId = req.user._id;
        //console.log('User ID:', userId);  // Log the user ID

        // Find the user by ID
        const user = await User.findById(userId);
        //console.log('User found:', user);  // Log the found user and their data

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ byteBucks: user.byteBucks})
        
    } catch (error) {
        console.error('Error in balance route:', error);  // Log the error details
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;