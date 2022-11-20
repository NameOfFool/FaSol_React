const { Schema, model } = require("mongoose")
const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const TokenSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, required: true }
})
const TokeModel = sequelize.define("token", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    refreshToken: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_user: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = UserModel;
module.exports = model("Token", TokenSchema);