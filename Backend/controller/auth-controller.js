const user = require("../model/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
exports.loginUser = async (req,res)=>{
   try {
    const {email,password} = req.body
    const result = await user.findOne({ email })
    if(!result){
        return res.status(404).json({
            message:"User not found",
        })
    }
    const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(404).json({
                success: false,
                message: "password not found"
            })
        }
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
        res.json({
            success: true,
            message: "Login Successfully...!",
            result: { email: result.email, name: result.name, token},
        })
   } catch (error) {
       res.status(404).json({
              success: false,
              message: "Login Failed"
         })
   }
}