import React, {Component} from 'react'
import { Modal,Form} from "react-bootstrap";
import "./postmaker.scss";

class PostMaker extends Component {
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
                    <button className="cancelBtn" variant="secondary" onClick={this.handleClose}>
                        Cancel
                    </button>
                    <button className="postBtn" variant="primary" onClick={this.handleClose}>
                        Post
                    </button>
                </Modal.Footer>

            </Modal>

        )
    }
}
export default PostMaker;