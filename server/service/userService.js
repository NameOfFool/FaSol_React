const UserModel = require("../models/user")
const bcrypt = require("bcrypt");
const uuid = require("uuid")
const mailService = require("../service/mailService")
const TokenService = require("../service/tokenService")
const UserDto = require("../dtos/userDto")
const ApiError = require('../exceptions/api_errors');
const tokenService = require("../service/tokenService");
class UserService {
    async registraion(email, password, login) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest("Пользователь с такой почтой уже зарегистрирован")
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const link = uuid.v4()
        const user = await UserModel.create({
            email: email,
            password: hashPassword,
            login: login,
            activationLink: link
        })
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${link}`);
        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }
    async activate(link) {
        const user = await UserModel.findOne({ link })
        if (!user)
            throw ApiError.BadRequest('Некорректная ссылка активации')
        user.isActivated = true
        await user.save()
    }
    async login(email, password) {
        const user = await UserModel.findOne({ email: email })
        if (!user)
            throw ApiError.BadRequest("Пользователь с такой почтой не найден")
        const arePassEquals = await bcrypt.compare(password, user.password)
        if (!arePassEquals) {
            throw ApiError.BadRequest("Неверный пароль")
        }
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({ ...UserDto })
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }
    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken)
        return token;
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            return ApiError.UnauthorizedError();
            const userData = tokenService.validateRefreshToken(refreshToken)
            const tokenFromDB = await tokenService.findToken(refreshToken)
            if (!userData || !tokenFromDB) {
                return ApiError.UnauthorizedError()
            }
            const user = await UserModel.findById(userData.id)
            const tokens = TokenService.generateTokens({ ...UserDto })
            await TokenService.saveToken(userDto.id, tokens.refreshToken)
            return {
                ...tokens,
                user: userDto
            }
        }
    }
    async getUsers() {
        const users = await UserModel.find()
        return users
    }
}
module.exports = new UserService()