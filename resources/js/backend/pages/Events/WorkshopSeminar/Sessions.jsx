import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllHosts} from "../../../../featurs/Hosts/HostSlice.js";

function Sessions({day}) {
    const {
        isLoading,
        hosts,
    } = useSelector((state) => state.hostReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllHosts());
    }, [dispatch]);

    return (
        <>
            <div id={`accordion-${day}`} className="accordion">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0" data-toggle="collapse" data-target={`#collapse${day}`}
                            aria-expanded="true" aria-controls={`collapse${day}`}>
                            <i className="fa" aria-hidden="true"></i> Day #{day}</h5>
                    </div>
                    <div id={`collapse${day}`} className="collapse show" data-parent={`#accordion-${day}`}>
                        <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high
                            life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sessions;
