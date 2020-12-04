import {SIGNIN_USER} from '../types';

const loginReducer =(state={},action)=>{
    switch(action.type){
        case SIGNIN_USER:
            return{signin:action.payload}
        default:
            return state;
        }   
}

export default loginReducer;
