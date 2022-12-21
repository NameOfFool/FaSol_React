const userService = require("../service/userService")
const { validationResult } = require("express-validator")
const ApiError = require("../exceptions/api_errors")

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req.body.email);
            if (!errors.isEmpty())
                return next(ApiError.BadRequest("Ошибка валидации", errors.array()))
            const { email, password, login } = req.body;
            const userData = await userService.registration(email, password, login)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 2073600,
                httpOnly: true
            })
            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {
            const { email, password, login } = req.body;
            const userData = await userService.login(email, password, login)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 2073600,
                httpOnly: true
            })
            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {

            const { refreshToken } = req.cookies
            console.log(req.cookies)
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        }
        catch (e) {
            next(e)
        }
    }
    async activate(req, res, next) {
        try {
            const link = req.params.link;
            await userService.activate(link);
            res.redirect(process.env.CLIENT_URL)
        }
        catch (e) {
            next(e)
        }
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 24 * 24 * 60 * 60,
                httpOnly: true
            })
            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }
}
module.exports = new UserController();