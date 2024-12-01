const mongoose = require('mongoose');

// Define the schema for blacklisted tokens
const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '3od' // This will automatically remove the document after 24 hours
    }
});

// Create the model from the schema
const BlackListToken = mongoose.model('BlackListToken', blackListTokenSchema);

module.exports = BlackListToken;