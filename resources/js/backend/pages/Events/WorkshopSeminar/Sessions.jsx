import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {modalAction} from "@/featurs/SlotModal/SlotModalSlice.js";
import {fetchAllHosts} from "@/featurs/Hosts/HostSlice.js";
import {Button} from "react-bootstrap";

function Sessions({index, day}) {
    const {
        isLoading,
        hosts,
    } = useSelector((state) => state.hostReducer);
    const dispatch = useDispatch();
    const [dayTitle, setDayTitle] = useState("");

    const callSlotModal = (e) => {
        e.preventDefault()
        let data = {
            date: day,
            index: index,
            title: `Day # ${index}`
        }
        dispatch(modalAction(data))
    }

    useEffect(() => {
        dispatch(fetchAllHosts());
    }, [dispatch]);

    return (
        <>
            <div id={`accordion-${index}`} className="accordion">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0" data-toggle="collapse" data-target={`#collapse${day}`}
                            aria-expanded="true" aria-controls={`collapse${day}`}>
                            <i className="fa" aria-hidden="true"></i> Day #{`${index} (${day})`}
                            <Button
                                type="btn"
                                style={{float: "right"}}
                                className="btn btn-success btn-sm"
                                onClick={e => callSlotModal(e)}
                            >
                                <i className="fa fa-plus-square"></i>
                            </Button>
                        </h5>
                    </div>
                    <div id={`collapse${day}`} className="collapse show" data-parent={`#accordion-${day}`}>
                        <div className="card-body">
                            {/*<SessionDetails*/}
                            {/*    index={index}*/}
                            {/*    day={day}*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sessions;
