import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/JobSlider.css";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    &#10095; {/* Right chevron */}
  </button>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    &#10094; {/* Left chevron */}
  </button>
);

const JobSlider = () => {
  const sliderRef = useRef(null);

  const jobCards = [
    { title: "Full Stack Developer", experience: "2 years", locations: "Chennai, Delhi" },
    { title: "Front End Developer", experience: "3 years", locations: "Bangalore, Mumbai" },
    { title: "Backend Developer", experience: "1 year", locations: "Pune, Chennai" },
    { title: "DevOps Engineer", experience: "4 years", locations: "Hyderabad, Mumbai" },
    { title: "Data Scientist", experience: "2 years", locations: "Delhi, Bangalore" },
    { title: "AI Specialist", experience: "3 years", locations: "Chennai, Pune" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,  
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipe: true, 
    touchMove: true,  
    draggable: true,  
    easing: "ease-in-out",  
    arrows: true,  
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <Slider ref={sliderRef} {...settings}>
        {jobCards.map((job, index) => (
          <div key={index} className="card shadow-sm border-0 rounded p-3">
            <div className="card-body">
              <h5 className="card-title text-primary">{job.title}</h5>
              <p className="card-text">
                <i className="fa-solid fa-briefcase me-2"></i>
                {job.experience}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-location-dot me-2"></i>
                {job.locations}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobSlider;
