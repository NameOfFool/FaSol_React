const sequelize = require("../db")
const {DataTypes} = require("sequelize")
const UserModel = sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    password:{
        type:DataTypes.STRING,
        allowNull: false
    }
    ,
    isActivated:{
        type:DataTypes.STRING,
        allowNull: false
    },
    activationLink:{
        type:DataTypes.STRING,
        allowNull: false
    }
})