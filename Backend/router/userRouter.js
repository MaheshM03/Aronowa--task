const express = require("express")
const { loginUser } = require("../controller/auth-controller")
const { CreateUser} = require("../controller/user")

const router = express.Router()

router.route("/").post(CreateUser)


module.exports = router