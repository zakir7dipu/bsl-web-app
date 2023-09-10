import React from 'react';
import {useSelector} from "react-redux";
import Preloader from "../components/Preloader/index.jsx";
import HeaderMeta from "../../ui/HeaderMeta.jsx";
import Breadcrumbs from "../components/Breadcrumbs/index.jsx";
import Information from "../components/Contact/Information.jsx";
import MessageForm from "../components/Contact/MessageForm.jsx";
import Map from "../components/Contact/Map.jsx";

function Contact(props) {
    const {isLoading, generalSetting} = useSelector(state => state.generalSettings)

    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Contact",
            url: "/contact"
        },
    ]
    return (
        <>
            {isLoading && <Preloader/>}
            <HeaderMeta
                title="Contact"
                page="Contact"
            />
            <Breadcrumbs
                page="Contact"
                breadcrumbs={breadcrumbs}
            />
            <div className="rs-contact pt-120 md-pt-80">
                <div className="container">
                    <div className="row">
                        <Information contact={generalSetting?.contact}/>
                        <MessageForm contact={generalSetting?.contact}/>
                    </div>
                </div>
                <Map map={generalSetting?.contact?.map}/>
            </div>
        </>
    );
}

export default Contact;
