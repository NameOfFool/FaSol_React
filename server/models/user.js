const { Schema, model } = require("mongoose")
const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    login: { type: String, unique: false, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
})
module.exports = model('User', UserSchema);