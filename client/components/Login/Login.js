import React, {Component} from 'react';
import './login.scss';
import {connect} from "react-redux";

class Login extends Component {
    state = {
        isVisible: true
    }

    showedToggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        if (this.state.isVisible) {
            return (
                <div className="loginWrap">
                <div className="loginBlock">
                    <div className="loginHeader">
                        <img className="errorIcon"/>
                        <p className="loginHeaderText">Error 322 : Permission denied</p>
                    </div>
                    <form className="loginForm">

                        <p className="loginFormItem">Name: <input className="loginInput" type="text" name="nickname"/></p>
                        <p className="loginFormItem">Password: <input className="loginInput" type="password" name="password"/></p>
                        <button className="loginButton" type="submit">Login</button>
                    </form>
                </div>
                </div>

            );
        } else {
            return null;
        }
    }
}

export default connect()(Login);