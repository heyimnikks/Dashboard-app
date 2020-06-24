const register =(userDetails)=>{
    localStorage.setItem('USER_INFO',JSON.stringify(userDetails));
    return{
       type: "REGISTER",
       payload:userDetails
    };
};

export default register;