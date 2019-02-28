import React, {Component} from 'react'
import {connect} from "react-redux";
import Header from "../../components/Header/Header";
import Messages from "../../components/Messages/Messages";
import Feed from "../../components/Feed/Feed";

import Profile from "../../components/Profile/Profile";
import Notifications from "../../components/Notifications/Notifications";
class Main extends Component{
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
        return(
        <div className="App">
            <Header toggle={this.showedToggle} notif={this.showNot} openProfile={this.showProfile}/>
            {this.state.showedMessages && <Messages />}
            {this.state.showedNotifications && <Notifications/>}
            {this.state.showedProfile && <Profile/>}
            <Feed/>

        </div>

        )
    }
}
export default connect()(Main)