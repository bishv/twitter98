import React, {Component} from 'react';
import './App.scss';
import Main from './components/Main/Main.js';
import Login from './components/Login/Login';
import LoginContainer from './components/LoginContainer/LoginContainer';
import Register from './components/Register/Register.js';
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.socket = io.connect('http://localhost:7700');
        this.socket.on('news', (data) => {
          console.log(data);
          this.socket.emit('my other event', { my: 'data' });
        });
    
    }


    render() {

        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />


            </Switch>

        );
    }
}

export default (App);
