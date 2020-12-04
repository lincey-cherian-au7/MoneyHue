import {SIGNUP_USER,GET_USER} from '../types';

const registerReducer =(state={},action)=>{
    switch(action.type){
        case SIGNUP_USER:
            return{signup:action.payload}
        case GET_USER:
            return{user:action.payload}
        default:
            return state;
        }   
}

export default registerReducer;
