import React from 'react';
import Category from "./category.jsx";

function Index({info}) {


    return (
        <>
            <Category services={info?.sub_services}/>

        </>
    );
}

export default Index;
