import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
    render() {
        return (
            
                <div className="container_box">
                    <div className="wraper">
                    <div><img src="./logo.png" alt="logo"/></div>
                    <form className="form_box">
                        <fieldset className="field">
                        <legend style={{color:"white"}}>User Registration Form</legend> 
                            <div className="row_box">
                                <div class="column_box">
                                    <label >First Name</label>
                                    <input type="text" name="fname" placeholder="Firstname"></input>
                                </div>
                            <div class="column_box">
                                    <label>Last Name</label>
                                    <input type="text" name="lname" placeholder="Lastname"></input>
                            </div>
                            </div>
                            <br/>
                            <div className="row_box">
                                <div class="column_box">
                                    <label >Email</label>
                                    <input type="text" name="Email" placeholder="Email"></input> 
                                </div>
                            </div>
                            <div className="row_box">
                                <div class="column_box">
                                    <label>Password</label>
                                    <input type="password" name="Password" placeholder="Password"></input>
                                </div>
                                <div class="column_box">
                                    <label>Confirm Password</label>
                                    <input type="password" name="ConfirmPassword" placeholder="ConfirmPassword"></input>
                                </div>
                            </div><br/>
                            <div>
                                <button type="submit" className="button_box">Register</button>
                            </div>
                        </fieldset>
                    </form>
                    <a className="new_box" href="./signUp">New User?</a>
                    </div>
                    
                </div>
         
        )
    }
}

export default SignUp;