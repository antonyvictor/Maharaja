import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'

function CarouselPage() {
    return(
      <div>
         <Carousel  >
          
      <Carousel.Item>
        <img style={{height:560}}
        className="img1"
        src={img1}
        alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:560}}
        className="img1"
        src={img2}
        alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:560}}
        className="img1"
        src={img3}
        alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:560}}
        className="img1"
        src={img4}
        alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:560}}
        className="img1"
        src={img5}
        alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:560}}
        className="img1"
        src={img6}
        alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:560}}
        className="img1"
        src={img7}
        alt="First slide"></img>
      </Carousel.Item>
    </Carousel>   
        </div>
  );
    
}
export default CarouselPage;