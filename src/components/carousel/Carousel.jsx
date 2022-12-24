import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
    return (
        <Carousel>
          <Carousel.Item>
          <img
              class="d-block w-100"
              src={require('../../assets/1.jpg')}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>SAVE THE SOULS</h3>
              <p>Children are our future, let them grow.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              class="d-block w-100"
              src={require('../../assets/2.jpg')}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>SAVE THE SOULS</h3>
              <p>Give the child a pencil, but not a plate to wash.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              class="d-block w-100"
              src={require('../../assets/4.jpg')}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>SAVE THE SOULS</h3>
              <p>
              If not now, then when? If not you, then who? If we are able to answer these fundamental questions, then perhaps we can wipe away the blot of human slavery</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default CarouselComponent