import React from 'react';
import Category from "./category.jsx";
import Admission from "./admission.jsx";

function Index({info}) {
    return (
        <>
            <Category services={info?.sub_services}/>
            <Admission type={`admission`}/>
        </>
    );
}

export default Index;
