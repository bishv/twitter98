import React, {Component} from 'react'
import './postmaker.scss'
import './profile.scss'

import {Button, Modal,Form} from "react-bootstrap";

import {connect} from "react-redux";

class Profile extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="profile-container">

                <div className="profile_avatar"/>
                <button className="profile_button"><span>Settings</span></button>
                <button className="profile_button"><span>Wall</span></button>
                <button className="profile_button" onClick={this.handleShow}><span>New post</span></button>
                <button className="profile_button"><span>New Quote</span></button>
                <button className="profile_button_exit">Exit</button>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="testModal" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">PostMaker 9000</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write your post</Form.Label>
                            <Form.Control className="postArea" as="textarea" rows="5" />
                        </Form.Group></Modal.Body>

                    <Modal.Footer>
                        <Button className="cancelBtn" variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button className="postBtn" variant="primary" onClick={this.handleClose}>
                            Post
                        </Button>
                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
}

export default connect()(Profile);