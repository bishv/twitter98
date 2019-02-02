import React, {Component} from 'react';
import './login.scss';
import {connect} from "react-redux";

class Login extends Component {
    state = {
        isVisible: false
    }

    showedToggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        if (this.state.isVisible) {
            return (
                <div>
                    <form>
                        <input type="text" name="name" /><br/>
                        <input type="text" name="password"/><br/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default connect()(Login);