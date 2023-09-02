import React from 'react';
import Style from "./Client.module.css"
import {Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientItem from "./Item.jsx"
import clientImg1 from "../../../../frontend-assets/images/partner/1.png"
import clientImg2 from "../../../../frontend-assets/images/partner/2.png"
import clientImg3 from "../../../../frontend-assets/images/partner/3.png"
import clientImg4 from "../../../../frontend-assets/images/partner/4.png"
import clientImg5 from "../../../../frontend-assets/images/partner/5.png"
import clientImg6 from "../../../../frontend-assets/images/partner/6.png"


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
        <div className={Style.client}>
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
                    <ClientItem
                        toLink={'#'}
                        img={clientImg1}
                    /><ClientItem
                        toLink={'#'}
                        img={clientImg2}
                    /><ClientItem
                        toLink={'#'}
                        img={clientImg3}
                    /><ClientItem
                        toLink={'#'}
                        img={clientImg4}
                    /><ClientItem
                        toLink={'#'}
                        img={clientImg5}
                    /><ClientItem
                        toLink={'#'}
                        img={clientImg6}
                    />
                </Carousel>;
            </Container>
        </div>
    );
}

export default Index;
