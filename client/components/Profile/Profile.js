import React, {Component} from 'react'
import './profile.scss'
import {connect} from "react-redux";

class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
                {/*<div className="profile_body">*/}
                    <div className="profile_avatar"/>
                    <div className="profile_settings"><span>Settings</span></div>
                    <div className="profile_wall"><span>Wall</span></div>
                    <div className="profile_new-post"><span>New post</span></div>
                    <div className="profile_new-quote"><span>New Quote</span></div>
                    <div className="exit">Exit</div>
                </div>
            // </div>
        );
    }
}

export default connect()(Profile);