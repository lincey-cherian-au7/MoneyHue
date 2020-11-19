import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="container ">
                    <div className="wrap-container">
                    <div>
                    <img src="./logo.png" alt="image"/>
                       
                    </div>
                    <form className="form">
                    <fieldset>
                    <legend>User Registration Form</legend> 
                        <div className="row">
                            <div class="column">
                                <label >First Name</label>
                                <input type="text" name="fname" placeholder="Firstname"></input>
                            </div>
                           <div class="column">
                                <label>Last Name</label>
                                <input type="text" name="lname" placeholder="Lastname"></input>
                           </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div class="column">
                                <label >Email</label>
                                <input type="text" name="Email" placeholder="Email"></input> 
                            </div>
                        </div><br/>
                        <div className="row">
                            <div class="column">
                                <label>Password</label>
                                <input type="password" name="Password" placeholder="Password"></input>
                            </div>
                            <div class="column">
                                <label>Confirm Password</label>
                                <input type="password" name="ConfirmPassword" placeholder="ConfirmPassword"></input>
                            </div>
                        </div><br/>
                        <div>
                            <button type="submit" className="button">Register</button>
                        </div>
                        </fieldset>
                    </form>
                    <a className="new" href="./signUp">New User?</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SignUp;