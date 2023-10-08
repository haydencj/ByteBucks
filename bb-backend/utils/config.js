require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const TOKEN_ID = process.env.TOKEN_ID
const ACCOUNT_ID = process.env.ACCOUNT_ID
const PRIVATE_KEY = process.env.PRIVATE_KEY
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    MONGODB_URI, PORT, TOKEN_ID, ACCOUNT_ID, PRIVATE_KEY, JWT_SECRET
}