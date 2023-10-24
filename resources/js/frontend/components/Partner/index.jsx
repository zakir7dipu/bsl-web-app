import React, {useEffect} from 'react';
import Style from "./Partner.module.css"
import {Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PartnerItem from "./Item.jsx"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPartners} from "../../../featurs/Partner/PartnerSlice.js";
import {uid} from "../../../lib/helper.js";
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
        isLoading ? <PartnerSkel/>:
        <div className={Style.partner}>
            <Container>
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color"></span>
                    <h2 className="title" style={{float:"none"}}>Our Partners</h2>
                </div>
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
