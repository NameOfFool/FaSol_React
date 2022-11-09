const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
            expiresIn: '24h'
        })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
            expiresIn: '24d'
        })
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({ user: userId, refreshToken })
        return token
    }
    async removeToken(refreshToken) {
        const tokenData = tokenModel.deleteOne({ refreshToken })
        return tokenData;
    }
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY)
            return userData
        } catch (e) {
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY)
            return userData
        } catch (e) {
            return null;
        }
    }
    async findToken(refreshToken) {
        const tokenData = tokenModel.findOne({ refreshToken })
        return tokenData;
    }
}
module.exports = new TokenService()