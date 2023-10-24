import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";
import {uid} from "../../lib/helper.js";
import OurTeam from "../components/OurTeam/index.jsx";
import {fetchAllTeams} from "../../featurs/Teams/TeamSlice.js";

function Team(props) {
    const {isLoading, teams} = useSelector(state => state.teamReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTeams())
        window.scrollTo(0, 0);
    }, [dispatch])

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Team",
            url: "/team"
        },
    ]

    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Team"
                page="Team"
            />
            <Breadcrumbs
                page="Team"
                breadcrumbs={breadcrumbs}
            />
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

export default Team;
