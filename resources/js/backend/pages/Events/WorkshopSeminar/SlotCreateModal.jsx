import React, {useState} from 'react';
import BizModal from "@/ui/BizzModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {modalAction} from "../../../../featurs/SlotModal/SlotModalSlice.js";
import SlotCreate from "../../../../backend/pages/Events/WorkshopSeminar/SlotCreate.jsx";
import {Button, Col} from "react-bootstrap";

function SlotCreateModal({slotHandler}) {
    const {isModalShow, title, date, index} = useSelector(state => state.slotModalAction)
    const dispatch = useDispatch()

    const [dayTitle, setDayTitle] = useState("")
    const [slotHost, setSlotHost] = useState("")
    const [slotStart, setSlotStart] = useState("")
    const [slotEnd, setEndStart] = useState("")
    const [slotTopic, setSlotTopic] = useState("")

    const handleModalClose = () => {
        let data = {
            date: "",
            index: "",
            title: ""
        }
        dispatch(modalAction(data))
        resetHandler()
    }

    const requestHandler = (e) => {
        e.preventDefault()
        let formData = {
            "index": index,
            "date": date,
            "title": dayTitle,
            "from": slotStart,
            "to": slotEnd,
            "topics": slotTopic,
            "mentors": slotHost
        }
        slotHandler(formData)
        handleModalClose()
    }

    const resetHandler = () => {
        setDayTitle("")
        setSlotHost("")
        setSlotStart("")
        setEndStart("")
        setSlotTopic("")
    }

    return (
        <BizModal isShow={isModalShow} title={title} handleClose={handleModalClose} large={'lg'}>
            <form className="form-profile" onSubmit={requestHandler}>
                <SlotCreate
                    dayTitle={dayTitle}
                    setDayTitle={setDayTitle}
                    slotHost={slotHost}
                    setSlotHost={setSlotHost}
                    slotStart={slotStart}
                    setSlotStart={setSlotStart}
                    slotEnd={slotEnd}
                    setEndStart={setEndStart}
                    slotTopic={slotTopic}
                    setSlotTopic={setSlotTopic}
                />
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
