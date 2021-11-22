import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
   
    handleSubmit = event =>{
        event.preventDefault();
        this.setState ({displayName:'', email: '', password:'',confirmPassword:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState ({[name]: value })
    }
    render() {
        // const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" >
                  <FormInput type="text" name='displayName' type="text"  label='displayName' value={this.state.displayName} handleChange={this.handleChange}  required />
                  <FormInput type="email" name='email'type="email"  label='Email' value={this.state.email} handleChange={this.handleChange} required  />
                  <FormInput type="password" name='password' label='password' value={this.state.password} handleChange={this.handleChange} required  />
                  <FormInput type="password" name='confirmPassword' label='confirmPassword' value={this.state.confirmPassword} handleChange={this.handleChange} required />

                  <CustomButtom type='submit'> Sign Up</CustomButtom>
                </form>
            </div>

        )
    }
}

export default SignUp;