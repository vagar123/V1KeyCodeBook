const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    birthDate: { type: Date },
    age: { type: Number }
})

module.exports = mongoose.model('User', userSchema)