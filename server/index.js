require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const router = require('./router/index')
const errorMiddleware = require("./middlewares/error_middleware")
const sequelize = require("./db")
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.urlencoded({ exteneded: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(errorMiddleware)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Порт ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}
start()