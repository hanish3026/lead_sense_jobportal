import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Career-Slider.css";
import Assets from "../assets/Assets";

const SliderComponent = () => {
  const sliderRef = useRef(null);
  const careerOptions = [
    // {
    //   name:""
    // }
    ["Java Developer", "Technical Lead", "Cyber Security", "AI Specialist"],
    [
      "Full Stack Developer",
      "Front End Developer",
      "Business Analyst",
      "AI Specialist",
    ],
    ["Data Scientist", "UI/UX Designer", "Product Manager", "AI Specialist"],
    ["DevOps Engineer", "Cloud Architect", "AI Specialist"],
    [
      "Project Manager",
      "Software Engineer",
      "Marketing Specialist",
      "AI Specialist",
    ],
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <>
      <div className="  car-img">
        <div className="col-lg-3">
          <h1 style={{ fontSize: "18px" }}>
            Explore Business Listings <br /> Across Key Career Paths
          </h1>
          <div className="col">
            <img style={{ width: "300px" }}  src={Assets.Career_img} alt="loading..." />
          </div>
        </div>
        <div className=" col-lg-6  career-slider-container">
          {/* Custom Previous Button */}
          <button
            className="prev-button"
            onClick={() => sliderRef.current.slickPrev()}
          >
            &#10094;
          </button>

          {/* Slider with Career Options */}
          <div className="col ">
            <Slider  ref={sliderRef} {...settings}>
              {careerOptions.map((careerArray, index) => (
                <div key={index} className="career-slide">
                  {careerArray.map((career, buttonIndex) => (
                    <div className="row">
                      <div className="col-4 col-lg-4">
                        <button key={buttonIndex} className="career-button">
                          {career}
                        </button>
                      </div>
                      <div className="col-4 col-lg-4">
                        <button key={buttonIndex} className="career-button">
                          {career}
                        </button>
                      </div>
                      <div className="col-4 col-lg-4">
                        <div key={buttonIndex} className="career-button">
                          {career}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>

          {/* Custom Next Button */}
          <button
            className="next-button"
            onClick={() => sliderRef.current.slickNext()}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
