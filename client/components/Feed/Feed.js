import React, {Component} from 'react'
import './feed.scss'
import {connect} from "react-redux";


class Feed extends Component {
    render() {
        return (
            <div className="feed_container">
                <div className="feed_body">
                    <div className="feed_data">
                        <div className="feed_user-avatar"/>
                        <div className="feed_user-name">@OldMan228</div>
                        <div className="feed_user-time">XX.XX.XXXX / XX:XX</div>
                    </div>
                    <div className="feed_post">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus facilis mollitia
                        nulla, officia porro reprehenderit vero. Blanditiis consequuntur, cum, dignissimos dolor harum
                        iure iusto libero perspiciatis, reiciendis unde velit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus facilis mollitia
                        nulla, officia porro reprehenderit vero. Blanditiis consequuntur, cum, dignissimos dolor harum
                        iure iusto libero perspiciatis, reiciendis unde velit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus facilis mollitia
                        nulla, officia porro reprehenderit vero. Blanditiis consequuntur, cum, dignissimos dolor harum
                        iure iusto libero perspiciatis, reiciendis unde velit.
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like"/>
                        <div className="feed_back-remit"/>
                        <div className="feed_back-comment"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(Feed)