import React from 'react';
import {Carousel} from 'react-bootstrap'


const CarouselComp=()=> {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-auto"
                    src="./carousel_1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-auto"
                src="./carousel_2.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-auto"
                src="./carousel_3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
            
        
    )
}

export default CarouselComp;
