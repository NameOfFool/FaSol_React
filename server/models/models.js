const sequelize = require("../db")
const { DataTypes } = require("sequelize")
const UserModel = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    isActivated: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activationLink: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
const TokenModel = sequelize.define("tokens", {
    refreshToken: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_user: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    }
})
UserModel.hasOne(TokenModel, {
    foreignKey: "id_user",
    sourceKey: "id"
});
TokenModel.belongsTo(UserModel, {
    foreignKey: "id_user",
    targetKey: "id"
});
module.exports = { UserModel, TokenModel }