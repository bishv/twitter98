import React, {Component} from 'react'
import './chat.scss'
import {connect} from "react-redux";

class Chat extends Component {
    render() {
        return (
            <div className="chat-container" id="chat">
                <div className="chat">There is no spoon</div>
                <div className="chat_read-part">
                    <input className="chat_input" placeholder="Back to the future..."/>
                    <div className="chat_send-button">
                        <span>Send</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Chat);