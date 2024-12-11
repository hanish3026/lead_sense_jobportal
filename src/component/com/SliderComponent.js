import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/SliderComponent.css"

const SliderComponent = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    fade: true, // For smooth transitions between slides
    cssEase: "ease-in-out", // Smooth transition effect
  };

  return (
    <div className="auto-slider-wrapper">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="auto-slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
