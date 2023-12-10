import React from 'react';
import OurTeam from "../OurTeam/index.jsx";
import {uid} from "../../../lib/helper.js";

function Speker(props) {
    return (
        <>
            <div className="rs-team modify1 pt-120 pb-95 md-pt-80 md-pb-75">
                <div className="container">
                    <div className="row">
                        {!isLoading &&
                            teams.map(item =>
                                <OurTeam team={item} key={uid()}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Speker;
