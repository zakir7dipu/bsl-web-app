import React from 'react';
import Style from "../Partner/Partner.module.css";
import {Container, Row} from "react-bootstrap";
import RowImg from "./RowImg.jsx";

function PartnerSkel(props) {
    return (
        <div className={Style.partner}>
            <Container>
                <RowImg count={5}/>
            </Container>
        </div>
    );
}

export default PartnerSkel;
