const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql2");
const bcrypt = require("bcrypt")
const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "fool"
})
app.use(cors())
app.use(express.urlencoded({ exteneded: false }))
app.use(express.json())
app.post("/", function (req, res) {
    const email = req.body.email
    const login = req.body.login

    bcrypt.hash(req.body.password1, 10, function (err, hash) {
        conn.query("INSERT INTO user values(null,?, ?,?)", [login, email, hash], function (error) {
            if (error) res.send(error)
            res.send(hash)
        })
    })

})
app.get("/findEmail", (req, res) => {
    const email = req.query.email
    conn.query("SELECT email from user where email=?", [email], (err, data) => {
        if (data) res.send(data)
    })
})
app.listen("3001", () => console.log("Порт 3001"))