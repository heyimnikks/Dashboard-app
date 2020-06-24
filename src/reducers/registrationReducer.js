let userDetails = localStorage.getItem('USER_INFO');
const initialState = userDetails ? JSON.parse(userDetails ): null;
const registrationReducer=(state = initialState,action)=>{
    switch(action.type){
        case "REGISTER" :
         return {...action.payload};
         default:
             return state;

    }
}

export default registrationReducer;