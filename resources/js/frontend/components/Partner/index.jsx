import React from 'react';
import Style from "./Partner.module.css"
import {Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PartnerItem from "./Item.jsx"
import partnerImg1 from "../../../../frontend-assets/images/partner/style2/1.png"
import partnerImg2 from "../../../../frontend-assets/images/partner/style2/2.png"
import partnerImg3 from "../../../../frontend-assets/images/partner/style2/3.png"
import partnerImg4 from "../../../../frontend-assets/images/partner/style2/4.png"
import partnerImg5 from "../../../../frontend-assets/images/partner/style2/5.png"
import partnerImg6 from "../../../../frontend-assets/images/partner/style2/6.png"


function Index(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
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
                    <PartnerItem
                        toLink={'#'}
                        img={partnerImg1}
                    /><PartnerItem
                        toLink={'#'}
                        img={partnerImg2}
                    /><PartnerItem
                        toLink={'#'}
                        img={partnerImg3}
                    /><PartnerItem
                        toLink={'#'}
                        img={partnerImg4}
                    /><PartnerItem
                        toLink={'#'}
                        img={partnerImg5}
                    /><PartnerItem
                        toLink={'#'}
                        img={partnerImg6}
                    />
                </Carousel>;
            </Container>
        </div>
    );
}

export default Index;
