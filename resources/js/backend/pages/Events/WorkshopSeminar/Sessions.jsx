import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {modalAction} from "@/featurs/SlotModal/SlotModalSlice.js";
import {fetchAllHosts} from "@/featurs/Hosts/HostSlice.js";
import {Button} from "react-bootstrap";
import {toStringTime, uid} from "@/lib/helper.js";

function Sessions({index, day, slotsInfo}) {
    const {
        isLoading,
        hosts,
    } = useSelector((state) => state.hostReducer);
    const dispatch = useDispatch();
    const [eventDaysInfo, setEventDaysInfo] = useState({});
    const [slots, setSlots] = useState([])

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

    useEffect(() => {
        const thisSlots = slotsInfo.filter(slot => slot.index === index);
        setSlots(thisSlots)
        setEventDaysInfo({
            date: day,
            index: index,
            title: `Day # ${index}`,
            slot: thisSlots
        })
    },[slotsInfo])

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
                            <table className="table table-responsive table-bordered" width="100%">
                                <thead>
                                <tr>
                                    <th style={{width:"25%"}}>Title</th>
                                    <th style={{width:"15%"}}>Host</th>
                                    <th style={{width:"10%"}}>Start At</th>
                                    <th style={{width:"10%"}}>End At</th>
                                    <th style={{width:"30%"}}>Topics</th>
                                    <th style={{width:"10%"}}>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {slots.map(slot => {
                                    return <tr key={uid()}>
                                        <td>{slot?.title}</td>
                                        <td>{slot?.mentors}</td>
                                        <td>{toStringTime(slot?.from)}</td>
                                        <td>{toStringTime(slot?.to)}</td>
                                        <td><p dangerouslySetInnerHTML={{__html: slot?.topics}}></p></td>
                                        <td>
                                            <Button
                                                type="btn"
                                                className="btn btn-danger btn-sm"
                                            ><i className="fa fa-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                })}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sessions;
