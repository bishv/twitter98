import React, {Component} from 'react';
import './Register.scss';
import {connect} from "react-redux";

class Register extends Component {
    state = {
        isVisible: false,
        nickname: "",
        password: "",
        email: "",
        confirmPassword: ""
    };

    showedToggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:7700/api/register', {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: 1, b: 2})
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function(data) {  
                    alert(JSON.stringify(data));
                }); 
            }
            else{
                alert("JOPA");
            }
        });
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    handleNameChange = (event) => {
        this.setState({nickname: event.target.value});
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleConfirmPasswordChange = (event) => {
        this.setState({confirmPassword: event.target.value});
    };


    render() {

//        if (this.state.isVisible) {
            return (
                <div className="registerWrap">
                <div className="registerBlock">
                    <div className="registerHeader">
                        <img className="errorIcon"/>
                        <p className="registerHeaderText">Error 228 : User is undefined</p>
                    </div>
                    <form className="registerForm" onSubmit={this.handleSubmit}>

                        <p className="registerFormItem">Nickname: <input className="registerInput" type="text" name="nickname" value={this.state.nickname} onChange={this.handleNameChange} /></p>
                        <p className="registerFormItem">Password: <input className="registerInput" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} /></p>
                        <p className="registerFormItem">Confirm password: <input className="registerInput" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} /></p>
                        <p className="registerFormItem">E-mail: <input className="registerInput" type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} /></p>
                        <button className="registerButton" type="submit">Register</button>
                    </form>
                </div>
                </div>
            );
//        } else {
//            return null;
 //       }
    }
}

export default connect()(Register);