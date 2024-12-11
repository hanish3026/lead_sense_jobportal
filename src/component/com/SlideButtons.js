import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/SliderComponent.css';

const SlideButtons = ({ list }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, 
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="sliderbtn-container">

      <Slider ref={sliderRef} {...settings}>
        {list.map((lists, index) => (
          <div key={index} className="slide">
            {lists.map((val, idx) => (
              <div key={idx} className="slide-item">
                <button className="slide-button">{val}</button>
              </div>
            ))}
          </div>
        ))}
      </Slider>

      <div className="button-container">
        {list[currentSlide].map((val, index) => (
          <button key={index} className="sync-button">
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideButtons;
