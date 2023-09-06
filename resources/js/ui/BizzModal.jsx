import React from 'react';
import {Modal} from "react-bootstrap";

function BizModal({isShow, title, children, handleClose, large}) {
    return (
        <Modal size={large} show={isShow} onHide={handleClose} animation={false} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}

export default BizModal;
