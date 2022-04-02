import axios from 'axios'
const { USER_SIGNUP_REQUEST, USER_SIGNUP_FAIL, USER_SIGNUP_SUCCESS } = require("../constants/signup-constant")
export const userAction = (formData) =>async (dispatch)=>{
    try {
        dispatch({type:USER_SIGNUP_REQUEST})
        const {data} = await axios.post("http://localhost:5000/api/user",formData)
        dispatch({type:USER_SIGNUP_SUCCESS,payload:data.result})
        // console.log(data)
    } catch (error) {
        dispatch({type:USER_SIGNUP_FAIL,payload:error})
    }
}