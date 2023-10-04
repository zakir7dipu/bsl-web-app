import React, {useEffect} from 'react';
import Category from "./category.jsx";
import Admission from "./admission.jsx";

function Index({info}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Category services={info?.sub_services}/>
            <Admission type={`admission`}/>
        </>
    );
}

export default Index;
