import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/login-constant"

export const loginAction = (loginDetails)=> async (dispatch)=>{
   try {
       dispatch({type:USER_LOGIN_REQUEST,isLoading:true})
       const {data} = await axios.post("http://localhost:5000/api/user/auth/login",loginDetails)
       dispatch({type:USER_LOGIN_SUCCESS,payload:data.result})
       localStorage.setItem("user",JSON.stringify(data.result))
   } catch (error) {
       dispatch({type:USER_LOGIN_FAIL,payload:error})
   }
}