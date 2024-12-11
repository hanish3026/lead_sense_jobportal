import React, { useState,useEffect } from "react";
import "../css/LandingPage.css";
import Assets from "../assets/Assets";
import DefaultHeader from "../com/DefaultHeader";
import JobSlider from "../com/JobSlider"; 
import SliderComponent from "./SliderComponent";  
import BuyCards from "../com/BuyCards";  
import Fotter from "../com/Fotter";   


const LandingPage = () => {


  const [skills, setSkills] = useState("");
  const [university, setUniversity] = useState("");
  const [location, setLocation] = useState("");

  const [filteredSuggestions, setFilteredSuggestions] = useState({
    skills: [],
    universities: [],
    locations: [],
  });

  // Sample data for suggestions (replace with actual data or API calls)
  const allSkills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Python"];
  const allUniversities = ["Bharathidasan University", "MIT", "Harvard", "Stanford"];
  const allLocations = ["Tiruchirappalli", "Chennai", "Bangalore", "Mumbai"];

  // Handle input changes and filter suggestions
  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === "skills") {
      setSkills(value);
      setFilteredSuggestions({
        ...filteredSuggestions,
        skills: allSkills.filter((skill) =>
          skill.toLowerCase().includes(value.toLowerCase())
        ),
      });
    } else if (type === "university") {
      setUniversity(value);
      setFilteredSuggestions({
        ...filteredSuggestions,
        universities: allUniversities.filter((univ) =>
          univ.toLowerCase().includes(value.toLowerCase())
        ),
      });
    } else if (type === "location") {
      setLocation(value);
      setFilteredSuggestions({
        ...filteredSuggestions,
        locations: allLocations.filter((loc) =>
          loc.toLowerCase().includes(value.toLowerCase())
        ),
      });
    }
  };

  // Handle selection from suggestion list
  const handleSelectSuggestion = (suggestion, type) => {
    if (type === "skills") {
      setSkills(suggestion);
      setFilteredSuggestions({ ...filteredSuggestions, skills: [] }); // Clear suggestions
    } else if (type === "university") {
      setUniversity(suggestion);
      setFilteredSuggestions({ ...filteredSuggestions, universities: [] }); // Clear suggestions
    } else if (type === "location") {
      setLocation(suggestion);
      setFilteredSuggestions({ ...filteredSuggestions, locations: [] }); // Clear suggestions
    }
  };

  
  
  return (
    <>
    <div>
      <div className="landingPage">
        <DefaultHeader />
        <div className="imgs">
          <img src={Assets?.Top} alt="top"></img>
        </div>
     

        <div style={{ marginLeft: "30px", marginTop: "50px" }} className="container">
      <div className="row">
        <div className="col-12">
          <div className="row bg-white p-2 rounded-3 shadow-sm align-items-center position-relative">
            {/* Skills Input */}
            <div className="col-12 col-sm-4 col-md-3">
              <div className="form-floating">
                <input
                  style={{ width: "100%", fontSize: "1.3rem" }}
                  type="text"
                  className="form-control form-control-sm"
                  id="skillsInput"
                  value={skills}
                  onChange={(e) => handleInputChange(e, "skills")}
                  placeholder="Skills / Job Title"
                />
                <label htmlFor="skillsInput">Skills / Job Title</label>
                {filteredSuggestions.skills.length > 0 && (
                  <ul
                    className="suggestion-list mt-2 position-absolute w-100"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    {filteredSuggestions.skills.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleSelectSuggestion(suggestion, "skills")}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* University Input */}
            <div className="col-12 col-sm-4 col-md-3">
              <div className="form-floating">
                <input
                  style={{ width: "100%", fontSize: "1.3rem" }}
                  type="text"
                  className="form-control form-control-sm"
                  id="universityInput"
                  value={university}
                  onChange={(e) => handleInputChange(e, "university")}
                  placeholder="University"
                />
                <label htmlFor="universityInput">University</label>
                {filteredSuggestions.universities.length > 0 && (
                  <ul
                    className="suggestion-list mt-2 position-absolute w-100"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {filteredSuggestions.universities.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleSelectSuggestion(suggestion, "university")}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Location Input */}
            <div className="col-12 col-sm-4 col-md-3">
              <div className="form-floating">
                <input
                  style={{ width: "100%", fontSize: "1.3rem" }}
                  type="text"
                  className="form-control form-control-sm"
                  id="locationInput"
                  value={location}
                  onChange={(e) => handleInputChange(e, "location")}
                  placeholder="Locations"
                />
                <label htmlFor="locationInput">Locations</label>
                {filteredSuggestions.locations.length > 0 && (
                  <ul
                    className="suggestion-list mt-2 position-absolute w-100"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {filteredSuggestions.locations.map((suggestion, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleSelectSuggestion(suggestion, "location")}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="col-12 col-sm-4 col-md-2">
              <button
                className="btn btn-danger btn-sm w-100"
                style={{ padding: "10px", fontSize: "larger" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
 


<div className="media" style={{marginTop:"50px"}}>
<div className="header-content">
  <h1>Find Your Next Career Opportunity</h1>
  <p className="tagline">Your gateway to top jobs and opportunities</p>
  <span>Discover new roles that match your skills and ambitions.</span>
  <span>Apply effortlessly and take the next step in your career journey.</span>
  <button style={{backgroundColor:" #AFC9F3"}} className="btn btn-primary text-dark">Join Us Today!</button>
</div>
</div>
   


      <div className="head_card">
        <div>
          <p>Provide experienced talent for simplified employee placement.</p>
          <p style={{ fontSize: "15px" }}>
            Streamlining process for efficient workforce integration.
          </p>
        </div>
        <div>
          <button className="text-white btn btn-danger pr-5 pl-5 trynow_btn">
            Try now
          </button>
        </div>
      </div>

      <div className="job_intern">
        <h1>Job</h1>
        <h1>Internship</h1>
      </div>

      <div className="">
          <JobSlider />
      </div>

      <div>
        <h1
          style={{
            fontSize: "18px",
            color: "#707070",
            fontWeight: "normal",
            marginTop: "50px",
          }}
        >
          We're the lead generation agency that can help you grow your business,
          <br /> that covers all your verticles.
        </h1>
      </div>

      <div className="container-fluid mt-5 bg-light p-5 rounded">
        <div className="row text-center">
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Edu}
                alt="Education"
              />
              <h1 className="h5 mt-2">Education</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Heath}
                alt="Healthcare"
              />
              <h1 className="h5 mt-2">Healthcare</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Reality}
                alt="Realty"
              />
              <h1 className="h5 mt-2">Realty</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Gadgets}
                alt="Gadgets"
              />
              <h1 className="h5 mt-2">Gadgets</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Sports}
                alt="Sports"
              />
              <h1 className="h5 mt-2">Sports</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Hospitality}
                alt="Hospitality"
              />
              <h1 className="h5 mt-2">Hospitality</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginTop: "50px" }}>
          <SliderComponent />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "whitesmoke",
          padding: "30px 40px",
          borderRadius: "20px",
          marginTop: "40px",
        }}
        className="container-fluid"
      >
        <div
          style={{
            padding: "0 15px",
            marginLeft: "10px",
            marginBottom: "10px",
          }}
          className="row section"
        >
          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Digital Marketing</h1>
                <p className="text-left">
                  We help businesses grow their online presence and reach their
                  target audience through a variety of digital marketing
                  channels, including search engine optimization (SEO),
                  pay-per-click (PPC) advertising, social media marketing, and
                  email marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Grow your business</h1>
                <p className="text-left">
                  We provide the strategies and tools you need to grow your
                  business, from increasing brand awareness to generating leads
                  and sales. We work with you to understand your goals and
                  develop a customized marketing plan that will help you achieve
                  them.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Branding</h1>
                <p className="text-left">
                  We help businesses create a strong and memorable brand that
                  will resonate with their target audience. We develop branding
                  strategies that include logo design, website development, and
                  social media marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div>
        <BuyCards />
       </div>

<div>
  <Fotter />
  
  </div> 
    </>
  );
}

export default LandingPage;