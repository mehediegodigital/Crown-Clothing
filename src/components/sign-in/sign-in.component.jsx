import React from "react";
//import { signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import CustomButtom from "../custom-button/custom-button.component";

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
          email: '',
          password: ''
        }

    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState ({email: '', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState ({[name]: value })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I Already Have an Account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput type="email" name="email" label='Email' value={this.state.email} handleChange={this.handleChange} required />

                    <FormInput type="password" name="password" label='Password' value={this.state.password} handleChange={this.handleChange} required />

                    <CustomButtom type="submit">SIGN IN</CustomButtom>
                   {/* <CustomButtom onClick={signInWithGoogle}> {''} Sign in with Google {''}</CustomButtom> */}
                </form>
            </div>
            
        )
    }
}

export default SignIn;