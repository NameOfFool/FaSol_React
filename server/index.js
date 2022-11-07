require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const router = require('./router/index')

app.use(cors())
app.use(express.urlencoded({ exteneded: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Порт ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}
start()