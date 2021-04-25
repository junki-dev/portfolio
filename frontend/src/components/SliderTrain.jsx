import React from 'react';

import '../assets/SliderTrain.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

const SliderTrain = () => {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div className="slider-box">Slide {num}</div>
    ));

  const sliderSetting = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="slider-section">
      <div className="tunnel" />

      <Slider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...sliderSetting}
        className="slider"
      >
        {renderSlides()}
      </Slider>
      <div className="tunnel" />
    </div>
  );
};

export default SliderTrain;
