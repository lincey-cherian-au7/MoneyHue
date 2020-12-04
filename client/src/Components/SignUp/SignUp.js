import React, { Component } from 'react';
import { connect } from 'react-redux'
import './SignUp.css'
import {signUpAction} from '../../Actions/signUpAction'
//import VerificationModal from  '../VerificationModal/VerificationModal'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            user: {
                fname:"",
                lname:"",
                email:"",
                mobile:"",
                password:"",
            },
            success:false,
            openModal:false
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.newUser = this.newUser.bind(this);
        this.setModalShow =(openModal)=>{
            this.setState({openModal})
        };
        
    };
    handleChange=(e)=>{
        const { name, value } = e.target;
        const {user} = this.state;
        this.setState({user:{...user,[name]:value}})
    }
    
    newUser =(e)=>{
        e.preventDefault();
        const {user} = this.state
        this.props.signUpAction(user) 
        this.setState({success:true}) 
        this.setModalShow(true)
      
    }
    
    render() {
        const {user} = this.state
        return (
            <div className="container_box">
                {/* <VerificationModal 
                    show={this.state.openModal}
                    name={this.state.user.fname}
                    email={this.state.user.email}
                    onHide={()=>this.setModalShow(false)}
                /> */}
                <div className="wraper_signup">
                <div style={{alignItems:"center",paddingLeft:"30%"}}><img src="./logo.png" alt="logo"/></div>
                <form className="form_box" onSubmit={this.newUser}>
                    <fieldset className="field">
                    <legend style={{color:"white"}}>User Registration Form</legend> 
                        <div className="row_box">
                            <div class="column_box">
                                <label >First Name</label>
                                <input type="text" name="fname"  required  placeholder="First Name" value={user.fname} onChange={this.handleChange}></input>
                            </div>
                            <div class="column_box">
                                <label>Last Name</label>
                                <input type="text" name="lname"   placeholder="Lastname" required value={user.lname} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        
                        <div className="row_box">
                            <div class="column_box">
                                <label >Email ID</label>
                                <input type="email" name="email" placeholder="Email"  required value={user.email} onChange={this.handleChange}></input> 
                            </div>
                            <div class="column_box">
                                <label>Mobile Number</label>
                                <input type="text" name="mobile" placeholder="Mobile"  required value={user.mobile} onChange={this.handleChange}></input> 
                            </div>
                        </div>
                        <div className="row_box">
                            <div class="column_box">
                                <label>Password</label>
                                <input type="password" name="password"  placeholder="Password" value={user.password} onChange={this.handleChange}></input>
                            </div>
                            <div class="column_box">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmpassword" placeholder="ConfirmPassword" ></input>
                            </div>
                        </div><br/>
                        <div>
                            <button  className="button_box" >Register</button>
                        </div>
                    </fieldset>
                </form>
                    <a className="new_box" href="./login">Already user?</a>
                </div> 
                {this.state.success && <Redirect to="/login" />}
            </div>
        )
    }
}


export default connect((state)=>({signup:state.user}),{signUpAction})(SignUp)


