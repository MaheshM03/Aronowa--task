const express = require("express")
const { loginUser } = require("../controller/auth-controller")
const router = express.Router()

router.route("/auth/login").post(loginUser)

module.exports = router