import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class HeroCarousel extends Component {
  render() {
    return (
      <div className="flex  items-center justify-center">
        <Carousel
          autoPlay={true}
          interval={5000}
          transitionTime={1000}
          infiniteLoop={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={100}
          dynamicHeight={true}
        >
          {/* <div className="items-center justify-center rounded shadow-md overflow-hidden h-[300] w-auto">
            <img src="/img/sanibel.jpeg" alt="image5" />
          </div> */}
          <div className="items-center justify-center rounded shadow-md overflow-hidden h-[300] w-auto">
            <img src="/img/TipsandSipsMudbugs.jpg" alt="image1" />
          </div>
          <div className="items-center justify-center rounded shadow-md overflow-hidden h-[300] w-auto">
            <img src="/img/Colleen-Maureen-Mary-Taylor.jpg" alt="image2" />
          </div>
          <div className="items-center justify-center rounded shadow-md overflow-hidden h-[300] w-auto">
            <img src="/img/kira.jpg" alt="image3" />
          </div>
          <div className="items-center justify-center rounded shadow-md overflow-hidden h-[300] w-auto">
            <img src="/img/outside.jpg" alt="image4" />
          </div>
        </Carousel>
      </div>
    );
  }
}
