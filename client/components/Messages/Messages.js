import React, {Component} from 'react'
import './messages.scss'
import {connect} from "react-redux";
import Chat from './Chat/Chat'


class Messages extends Component {
    state = {

        showed: false,
        showedChat: false
    }

    ShowedToggle = () => {
        this.setState({
            showed: !this.state.showed,
            showedChat: !this.state.showedChat
        })
    }
    render() {
        return (
            <div className="messages-container">
                <div className="message-container" id="messages">
                    <div className="message message-btn" onClick={this.ShowedToggle}>
                        <div className="message_avatar"/>
                        <div className="message_text-post">98 pirates on the worm from the desert</div>
                        <div className="message_post-date">XX.XX.19XX</div>
                    </div>
                    <p className="main-text">There is no oldfags yet...</p>
                </div>

                {this.state.showed && <Chat/>}
                {this.state.showedChat && <Chat/>}
            </div>
        )
    }
}

export default connect()(Messages);