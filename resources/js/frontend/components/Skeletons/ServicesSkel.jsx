import React from 'react';
import {Container, Row} from "react-bootstrap";
import ServiceItemSkel from "./ServiceItemSkel.jsx";
import ServiceItem from "../Services/ServiceItem.jsx";
import {uid} from "../../../lib/helper.js";
import TextSkel from "./TextSkel.jsx";

function ServicesSkel(props) {
    return (
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <Container>
                <div className="sec-title2 text-center mb-45">
                    <TextSkel
                        lineHeight={`28px`}
                        height={`14px`}
                        width={`100px`}
                        baseColor={`#cacaca`}
                        highlightColor={`#949393`}
                    />
                    <h2 className="title title2" style={{float: "none"}}>
                        <TextSkel
                            lineHeight={`1.4rem`}
                            height={`36px`}
                            width={`300px`}
                            count={`1.7`}
                            baseColor={`#cacaca`}
                            highlightColor={`#949393`}
                        />
                    </h2>
                </div>

                <Row>
                    <ServiceItemSkel count={6}/>
                </Row>
            </Container>
        </div>
    );
}

export default ServicesSkel;
