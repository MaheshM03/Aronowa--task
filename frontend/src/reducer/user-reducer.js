const { USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL } = require("../constants/signup-constant");

exports.userReducer = (state = {user:{}},{payload,type})=>{
    switch (type) {
        case {type:USER_SIGNUP_REQUEST}:
            return {isLoading:true}
        case {type:USER_SIGNUP_SUCCESS}:
            return {user:payload,isLoading:false}
        case {type:USER_SIGNUP_FAIL}:
            return {userError:payload,isLoading:false}
        default:
            return state;
    }
}