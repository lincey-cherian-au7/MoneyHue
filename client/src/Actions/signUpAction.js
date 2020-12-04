import {SIGNUP_USER,GET_USER} from '../types'

const API = process.env.REACT_APP_API_URL

export const signUpAction =(user)=>async(dispatch)=>{
    await fetch(`${API}/register`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        console.log(`response`,response.json())
        return response.json();
    })
    .then((data)=> {
        console.log(`data,${data.json()}`)
        dispatch({
            type:SIGNUP_USER,
            payload:data
        })
    })
    .catch(err=>console.log(err))
    
};

export const getUser =(email)=>async(dispatch)=>{
    await fetch(`${API}/data/${email}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
      
    })
    .then(response => {
        console.log(`response`,response.json())
        return response.json();
    })
    .then((data)=> {
        console.log(`data,${data}`)
        dispatch({
            type:GET_USER,
            payload:data
        })
    })
    .catch(err=>console.log(err))
    
};

