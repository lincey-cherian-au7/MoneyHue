import React, { Component } from 'react';
import './SignIn.css'

class SignIn extends Component {
    render() {
        return (
            <div className="container">
                <div className="wraper">
                    <div className="message"> Welcome Back!!</div>
                    <fieldset>
                        <legend>Login</legend>
                        <form className="form">
                            <div className="row">
                                <label>Email</label>
                                <input type="text" name="Email" placeholder="Email"></input> 
                            </div>
                            <div className="row">
                            <label>Password</label>
                                <input type="password" name="Password" placeholder="Password"></input>
                            </div>
                            <button className="button">Submit</button>
                        </form>
                        
                    </fieldset>
                    <a className="new" href="./signUp">New User?</a>
                </div>
            </div>
        )
    }
}

export default  SignIn;