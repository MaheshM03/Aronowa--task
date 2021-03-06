const express = require('express')
const db = require('./config/db')
const cors = require("cors")
const env = require("dotenv")
env.config({ path: "./config/.env" })
const user = require('./router/userRouter')
const login = require("./router/auth-router")
db()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/user", user)
app.use("/api/user", login)

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}!`))