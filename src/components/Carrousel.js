import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/01.gif"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/02.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/03.gif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;