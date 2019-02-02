import React, {Component} from 'react';
import './Register.scss';
import {connect} from "react-redux";

class Register extends Component {
    state = {
        isVisible: false
    }

    showedToggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

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
        });
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    handleNickNameChange = (event) => {
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
                <div>
                    <form onSubmit={this.handleSubmit}>
        
                        Nickname: <input type="text" name="nickname" value={this.state.nickname} onChange={this.handleNameChange} /><br/>
                        Password: <input type="text" name="password"value={this.state.password} onChange={this.handlePasswordChange} /><br/>
                        Confirm password: <input type="text" name="confirmPassword"value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} /><br/>
                        E-mail: <input type="text" name="email"value={this.state.email} onChange={this.handleEmailChange} /><br/>
                        <button type="submit">Register</button>
                    </form>
                </div>
            );
//        } else {
//            return null;
 //       }
    }
}

export default connect()(Register);