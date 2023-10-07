const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    byteBucksId: String, // To store Hedera account ID associated with the user
    // ... any other fields you want to include
});

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    // PWH should not be revealed
    delete returnedObject.passwordHash
  }
})


const User = mongoose.model('User', userSchema)
module.exports = User