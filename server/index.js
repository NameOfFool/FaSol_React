const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql2");
const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "shnurki"
})
app.use(cors())
app.use(express.urlencoded({ exteneded: false }))
app.use(express.json())
app.post("/", function (req, res) {
    res.send(req.body)
})
app.listen("3001", () => console.log("Порт 3001"))