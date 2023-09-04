import React from 'react';
import {Link} from "react-router-dom";
import {uid} from "../../../lib/helper.js";

function Index({page, breadcrumbs}) {
    return (
        <div className="rs-breadcrumbs img1">
            <div className="breadcrumbs-inner text-center">
                <h1 className="page-title">{page}</h1>
                <ul>
                    {breadcrumbs.map((item, index)=> {
                        const lastItem = breadcrumbs.length -1
                        const {name, url} = item
                        return (
                            <li key={uid()}>{index === lastItem ? name : <Link className="active" to={url}>{name}</Link>}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Index;
