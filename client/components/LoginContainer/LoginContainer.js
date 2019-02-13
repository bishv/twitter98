import React, {Component} from 'react';
import {connect} from "react-redux";

class LoginContainer extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:7700/api/authenticate', {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': this.state.email,
                'password': this.state.password
            })
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

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>    
                        E-mail: <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} /><br/>
                        Password: <input type="text" name="password"value={this.state.password} onChange={this.handlePasswordChange} /><br/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            );
    }
}

export default connect()(LoginContainer);