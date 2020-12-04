import {SIGNIN_USER} from '../types'

const API = process.env.REACT_APP_API_URL

export const signinAction =(user)=>async(dispatch)=>{
    await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=> {
        localStorage.setItem("auth",JSON.stringify(data))
        dispatch({
            type:SIGNIN_USER,
            payload:data
        })
    })
    .catch(err=>console.log(err))
    
};
