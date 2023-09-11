import React from 'react';
import {Col} from "react-bootstrap";
import ImgSkel from "./ImgSkel.jsx";
import {uid} from "../../../lib/helper.js";

function ProvidedServicesSkel({count}) {
    return (
        Array(count).fill(0).map((item, index) =>{
            return(
                <Col lg={6} key={uid()}>
                    <ImgSkel
                        width={`100%`}
                        height={`200px`}
                        baseColor={`#cacaca`}
                        highlightColor={`#949393`}
                    />
                </Col>
            )
        })
    );
}

export default ProvidedServicesSkel;
