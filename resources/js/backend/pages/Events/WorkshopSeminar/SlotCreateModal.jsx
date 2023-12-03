import React from 'react';
import {MdStar} from "react-icons/md";
import FileInput from "@/backend/components/inputFile/Index.jsx";
import BizModal from "@/ui/BizzModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import SlotModalReducer, {modalAction} from "../../../../featurs/SlotModal/SlotModalSlice.js";
import SlotCreate from "../../../../backend/pages/Events/WorkshopSeminar/SlotCreate.jsx";
import {Button, Col} from "react-bootstrap";

function SlotCreateModal() {
    const {isModalShow, title, date, index} = useSelector(state => state.slotModalAction)
    const dispatch = useDispatch()
    const handleModalClose = () => {
        let data = {
            date: "",
            index: "",
            title: ""
        }
        dispatch(modalAction(data))
    }

    const requestHandler = () => {

    }

    return (
        <BizModal isShow={isModalShow} title={title} handleClose={handleModalClose} large={'lg'}>
            <form className="form-profile" onSubmit={requestHandler}>
                <SlotCreate/>
                <Col className="mt-3">
                    <Button
                        className="btn-danger px-3 float-right ml-1"
                        type={"button"}
                        onClick={handleModalClose}
                    >
                        Close
                    </Button>
                    <Button className="btn-primary px-3 float-right ml-1" type={"submit"}>Save</Button>
                </Col>
            </form>
        </BizModal>
    );
}

export default SlotCreateModal;
