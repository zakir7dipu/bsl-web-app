import React from 'react';
import Style from "./VideoModule.module.css"
import {videoModuleAction} from "../../../featurs/NavAction/NavSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {Button, Modal} from "react-bootstrap";

function Index(props) {
    const {videoModuleShow, videoId} = useSelector(state => state.navAction)
    const dispatch = useDispatch()
    const handelVideoAction = () => {
        dispatch(videoModuleAction(""))
    }
    return(
        <Modal
            show={videoModuleShow}
            onHide={() => handelVideoAction()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={Style.transparent}
        >
            <Modal.Body>
                {videoId !== "" ?
                    <iframe className={Style.videoFrame} src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; encrypted-media"></iframe>
                    : ""}
            </Modal.Body>
        </Modal>
    )
}

export default Index;
