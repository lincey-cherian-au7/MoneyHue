import React from 'react';
import {Carousel} from 'react-bootstrap';


const ReviewCarousel=()=> {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="rounded-circle w-25 h-25"
                    src="./person_2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec eu turpis vel nisi molestie tempor gravida vel. Proin arcu dolor, sodales a ultrices quis, ultricies non tellus. Vestibulum tristique eget odio eu ornare. Nam consectetur elit ut lacus egestas mattis..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="rounded-circle w-25 h-25"
                src="./person_1.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, suscipit, tristique leo vitae, varius sem. Donec eu turpis vel nisi molestie tempor. Nulla vel lectus sem. Proin porta nisi quam, vel eleifend lectus gravida vel. Proin arcu dolor, sodales a ultrices quis, ultricies non tellus. Vestibulum tristique eget odio eu ornare. Nam consectetur elit ut lacus egestas mattis.</p>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="rounded-circle w-25 h-25"
                src="./person_3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lorem turpis, at dapibus neque euismod non. Fusce sit Vestibulum tristique eget odio eu ornare. Nam consectetur elit ut lacus egestas mattis..</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ReviewCarousel;
