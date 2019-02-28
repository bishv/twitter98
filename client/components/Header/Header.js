import React, {Component} from 'react'
import './Header.scss'
import { connect } from 'react-redux'


class Header extends Component{
    render(){
        console.log('Header', this);

        return(<div className="main-header">
                <div className="logo-head" >
                  <div className="wrap">
                    <a href="http://localhost:7700/" >Emitter_98
                    </a>
                    <div className="btns favorites">
                    </div>
                    <div className="btns notifications" onClick={this.props.notif}>
                    </div>
                    <div className="btns messages" onClick={this.props.toggle}>
                    </div>
                    <div className="search">
                      <div className="search-icon">
                      </div>
                      <input  className="search-input" placeholder="Back to the future...">
                      </input>
                    </div>
                    </div>
                  <p className="phrase">&#9993; Luke I am your father ! &#9993;</p>
                    <div className="btns profile" onClick={this.props.openProfile}>
                        <p>OldMan228</p>
                        <div className="profile-img"/>
                    </div>
                </div>
            <audio id="sound-link" preload="auto">
                <source src="../../audio/click.mp3" type="audio/mpeg"/>
            </audio>
            </div>
        );


    }

}
export default connect()(Header);
