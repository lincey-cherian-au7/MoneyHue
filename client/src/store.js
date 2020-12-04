import {createStore, applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk'
import registerReducer from './Reducers/signUpReducer'
import loginReducer from './Reducers/signinReducer'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const initialState ={};
const store = createStore(combineReducers({
    signup:registerReducer,
    signin:loginReducer,

    }),initialState,composeEnhancer(applyMiddleware(thunk)) );

export default store;