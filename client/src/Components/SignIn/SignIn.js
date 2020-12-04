import React, { Component } from 'react';
import './SignIn.css'
import {signinAction} from '../../Actions/signinActions'
//import VerificationModal from  '../VerificationModal/VerificationModal'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            user: {
                email:"",
                password:"",
            },
            success:false,   
        }
        this.handleChange = this.handleChange.bind(this);
        this.signinUser = this.signinUser.bind(this);
     
        
    };
    handleChange=(e)=>{
        const { name, value } = e.target;
        const {user} = this.state;
        this.setState({user:{...user,[name]:value}})
    }
    
    signinUser =(e)=>{
        e.preventDefault();
        const {user} = this.state
        this.props.signinAction(user)
        this.setState({success:true}) 
    }
    render() {
        const {user} = this.state
        return (
            <div className="container">
                <div className="wraper">
                    <div style={{alignItems:"center",paddingLeft:"80px"}}>
                        <img src="./logo.png" alt="image"/>
                        <div className="message"> Welcomes You!!</div>  
                    </div>
                    <fieldset className="field" >
                        <legend>Login</legend>
                        <form className="form" onSubmit={this.signinUser}>
                            <div className="row">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Email"  required value={user.email} onChange={this.handleChange}></input> 
                            </div>
                            <div className="row">
                            <label>Password</label>
                                <input type="password" name="password"  placeholder="Password" value={user.password} onChange={this.handleChange}></input>
                            </div>
                            <br/>
                            <button className="button1">Submit</button>
                        </form>
                        
                    </fieldset>
                    <br/>
                    <a className="new" href="./signUp" style={{alignItems:"center",paddingLeft:"110px"}}>New User?</a>
                </div>
            </div>
        )
    }
}

export default connect((state)=>({signin:state.user}),{signinAction})(SignIn)