import React, {Component} from 'react'
import {Button, Modal,Form} from "react-bootstrap";
import "./test.scss";

class Test extends Component{
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
        return(
            <div>

            <Button variant="primary" onClick={this.handleShow}>
                Launch demo modal
            </Button>
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
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />
                </div>
        );
    }
}
export default Test;