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
        showedMessages: false,
        showedNotifications: false,
        showedProfile: false
    };

    showedToggle = () => {
        this.setState({
            showedMessages: !this.state.showedMessages

        })
    }
    showNot = () => {
        this.setState({
            showedNotifications: !this.state.showedNotifications
        })
    }

    showProfile = () => {
        this.setState({
            showedProfile: !this.state.showedProfile
        })
    }
    render() {
        return (
            <div className="App">
                {/*<Register/>*/}
                <Header toggle={this.showedToggle} notif={this.showNot} openProfile={this.showProfile}/>
                {this.state.showedMessages && <Messages />}
                {this.state.showedNotifications && <Notifications/>}
                {this.state.showedProfile && <Profile/>}
                <Feed/>
                <Login/>

            </div>
        );
    }
}

export default (App);
