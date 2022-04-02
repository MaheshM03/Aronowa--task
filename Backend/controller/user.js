const user = require("../model/userModel")
const bcrypt = require("bcryptjs")
exports.CreateUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const result = await user.create({...req.body,password})
        res.json({
            success: true,
            message: "User Created Successfully", 
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Unable to create user ${error}`
        })
    }
}