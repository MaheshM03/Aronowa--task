const { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } = require("../constants/login-constant");

exports.authReducer = (state = {loginUser:{}},{payload,type} ) =>{
switch (type) {
    case USER_LOGIN_REQUEST:
        return {isLoading:true}
    case USER_LOGIN_SUCCESS:
        return {loginUser:payload,isLoading:false}
    case USER_LOGIN_FAIL:
       return {loginUserErro:payload,isLoading:false}
    default:
        return state;
}
}