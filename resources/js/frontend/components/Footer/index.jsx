import React from 'react';
import Style from './Footer.module.css'
import footerBg from "../../../../frontend-assets/images/bg/footer-bg.png"

import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import Top from "./Top.jsx";

function Index(props) {
    const {isLoading, generalSetting} = useSelector(state => state.generalSettings)
    const date = new Date()
    return (
        <footer id="FooterSec" className={Style.footer} style={{backgroundImage: `url(${footerBg})`}}>
            <Top
                newsletter={generalSetting?.newsletter}
                general={generalSetting?.general}
                contact={generalSetting?.contact}
                backlink={generalSetting?.backlink}
            />
            <div style={{    padding: '20px 0', background: 'rgba(255, 255, 255, 0.4)'}}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div>
                                <p>© {date.getFullYear()} All Rights Reserved. Developed & Design By <Link to="/" style={{textDecoration:'none',color:'#555'}}>{generalSetting?.general?.site_name}</Link>
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Index;
