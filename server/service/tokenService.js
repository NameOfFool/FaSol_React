const jwt = require('jsonwebtoken')
const { TokenModel } = require('../models/models')

class TokenService {
    generateTokens(payload) {
        console.log(payload)
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
            expiresIn: '24h'
        })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
            expiresIn: "20d"
        })
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(id_user, refreshToken) {
        const tokenData = await TokenModel.findOne({ where: { id_user: id_user } })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
        }
        const token = await TokenModel.upsert({ id_user: id_user, refreshToken: refreshToken }).then((res) => {
            return res;
        }).catch(err => {
            console.log(err)
        })
        return token
    }
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY)

            return userData
        } catch (e) {
            return null;
        }
    }
    async removeToken(refreshToken) {
        const tokenData = TokenModel.destroy({ where: { refreshToken } })
        return tokenData;
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY)
            return userData
        } catch (e) {
            console.log(e)
            return null;
        }
    }

    async findToken(refreshToken) {
        const tokenData = await TokenModel.findOne({ where: { "refreshToken": refreshToken } }).catch(err => {
            console.log(err)
        })
        return tokenData;
    }
}

module.exports = new TokenService()