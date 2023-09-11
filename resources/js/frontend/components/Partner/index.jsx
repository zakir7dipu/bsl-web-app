import React, {useEffect} from 'react';
import Style from "./Partner.module.css"
import {Col, Container, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PartnerItem from "./Item.jsx"
import partnerImg1 from "../../../../frontend-assets/images/partner/style2/1.png"
import partnerImg2 from "../../../../frontend-assets/images/partner/style2/2.png"
import partnerImg3 from "../../../../frontend-assets/images/partner/style2/3.png"
import partnerImg4 from "../../../../frontend-assets/images/partner/style2/4.png"
import partnerImg5 from "../../../../frontend-assets/images/partner/style2/5.png"
import partnerImg6 from "../../../../frontend-assets/images/partner/style2/6.png"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPartners} from "../../../featurs/Partner/PartnerSlice.js";
import {uid} from "../../../lib/helper.js";
import RowImg from "../Skeletons/RowImg.jsx";
import PartnerSkel from "../Skeletons/PartnerSkel.jsx";


function Index(props) {
    const {isLoading, partners} = useSelector(state => state.partnerReducer)
    const dispatch = useDispatch()

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 8
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 2
        }
    };

    useEffect(() => {
        dispatch(fetchAllPartners())
    }, [])

    return (
        !isLoading ? <PartnerSkel/>:
        <div className={Style.partner}>
            <Container>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false}
                >
                    {partners?.map(item => <PartnerItem
                        key={uid()}
                        info={item}
                    />)}
                </Carousel>
            </Container>
        </div>
    );
}

export default Index;
