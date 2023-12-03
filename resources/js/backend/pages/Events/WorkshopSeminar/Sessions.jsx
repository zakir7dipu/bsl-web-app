import React from 'react';
import SessionDetails from "@/backend/pages/Events/WorkshopSeminar/SessionDetails.jsx";

function Sessions({day}) {

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
                        <div className="card-body">
                            <SessionDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sessions;
