import React from 'react';
import {Col, Row} from "react-bootstrap";
import ImgSkel from "./ImgSkel.jsx";

function RowImg({count}) {
    return (
        <Row>
            {Array(count).fill(0).map((item, index) => {
                return <Col lg={2} key={index} className="mx-3">
                    <ImgSkel
                        width={`218px`}
                        height={`66px`}
                        baseColor={`#b4b4b4`}
                    />
                </Col>
            })}

        </Row>
    );
}

export default RowImg;
