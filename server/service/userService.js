const UserModel = require("../models/user")
const bcrypt = require("bcrypt");
const uuid = require("uuid")
const mailService = require("../service/mailService")
const TokenService = require("../service/tokenService")
class UserService {
    async registraion(email, password, login) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) {
            throw new Error("Пользователь с такой почтой уже зарегистрирован")
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const link = uuid.v4()
        const user = await UserModel.create({
            email: email,
            password: hashPassword,
            login: login,
            activationLink: link
        })
        await mailService.sendActivationMail(email, activationLink);
        const tokens = TokenService.generateTokens()
    }
}
module.exports = new UserService()