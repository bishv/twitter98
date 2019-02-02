import React, {Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Feed from "./components/Feed/Feed";
import Login from './components/Login/Login';
import Register from './components/Register/Register.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.socket = io.connect('http://localhost:7700');
        this.socket.on('news', (data) => {
          console.log(data);
          this.socket.emit('my other event', { my: 'data' });
        });
    
    }

    state = {
        showed: false
    }

    showedToggle = () => {
        this.setState({
            showed: !this.state.showed
        })
    }
    render() {
        return (
            <Register/>
            /*<div className="App">
                <Header toggle={this.showedToggle} />
                {this.state.showed && <Messages />}
                <Login/>
                <Feed/>


            </div>*/
        );
    }
}

export default (App);
