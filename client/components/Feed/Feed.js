import React, {Component} from 'react'
import './feed.scss'
import {connect} from "react-redux";


class Feed extends Component {
    state = {
        likes: 14,
        remits: 15,
        commits: 2,
        isVisibleFeed: true
    };

    clickForLike = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    };
//
// clickForDislike = () => {
//         this.setState({
//             likes: this.state.likes -1
//         });
//     }
//
// clickForDislike = () => {
//         if() this.clickForLike
// }

    switchVision = () => {
        this.setState({
            isVisibleFeed: true
        })
    }


    render() {
        return (
            <div className="feed_container">
                <div className="feed_buttons">
                    <div className="feed_favor active">Fav</div>
                    <div className="feed_btns">Feed</div>
                </div>
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
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
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
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
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
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
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
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
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
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
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
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
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
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
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
                    </div>
                    <div className="feed_back">
                        <div className="feed_back-like" id="like" onClick={this.clickForLike}/>
                        {this.state.likes}
                        <div className="feed_back-remit"/>
                        <span id={this.remits}/>{this.state.remits}
                        <div className="feed_back-comment"/>
                        <span id={this.commits}/>{this.state.commits}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Feed)