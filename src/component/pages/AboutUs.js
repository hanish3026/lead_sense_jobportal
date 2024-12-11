import React, { useState,useEffect } from "react";
import "../css/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assets from "../assets/Assets";
import Fotter from "../com/Fotter";
import Timeline from "../com/TimeLine";
import SliderComponent from "../com/SliderComponent";
import SliderTiedUpCompany from "../com/SliderTiedUpCompany";
import DefaultHeader from "../com/DefaultHeader";

const images = [Assets.ImgOne, Assets.ImgTh, Assets.Imgt];

function AboutUs() {
  const [para, setPara] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [colour, setColour] = useState("");
  const [reviews, setReviews] = useState([
    {
      imgSrc: Assets.RoundImg,
      name: "John Doe",
      description:
        "I recently had the pleasure of working with this team, and my experience was outstanding. The project was handled with a high level of professionalism and attention to detail.",
    },
    {
      imgSrc: Assets.RoundImg,
      name: "Jane Doe",
      description:
        "The team was fantastic, delivering beyond expectations. They kept everything well-organized and maintained clear communication throughout.",
    },
  ]);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  const [newReview, setNewReview] = useState({
    imgSrc: Assets.RoundImg,
    name: "",
    description: "",
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePopUP = () => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({ imgSrc: Assets.RoundImg, name: "", description: "" });
    toggleModal();
  };

  function handleclick() {
    setPara(!para);
  }
  function changeHoverColour() {
    setColour("colourBlue");
  }
  return (
    <div>
      <DefaultHeader />
      <div style={{marginTop:"2px"}} className="marginSlider">
        <SliderComponent images={images} />
      </div>
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body h-50">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control mb-3"
                  name="name"
                  value={newReview.name}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="Your review"
                  className="form-control mb-3"
                  style={{ height: "200px" }}
                  name="description"
                  value={newReview.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePopUP}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" container-fluid img-Conatiner"></div>
      <section className="stats-section text-center my-5">
        <div>
          <div className="row px-md-5 px-4">
            <div className="col-md-4 d-flex flex-column mb-md-5 py-5 mr-md-0 mt-md-4">
              <div>
                <h1 className="text-start text-danger">Meet LeadSense </h1>
                {/* <h1 className="text-start text-danger"></h1> */}
              </div>
              <div className="text-start text-secondary">
                <h1>digital.innovative.creative.</h1>
                {/* <h1> </h1>
                <h1></h1> */}
              </div>
              {/* <p className="">
                At LeadSense we specialize in branding, creating campaigns in
                all digital formats, and whitelisting premium publishers. We
                have a proven track record of achieving ROI goals by optimizing
                clicks, leads, and conversions. We are committed to helping our
                clients achieve their marketing objectives and build strong
                brands.
              </p>
              <button className="btn btn-primary">Read More</button> */}
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mb-5 ">
              <div className="stat-card">
                <div className="stat-card-body text-center">
                  <h1 className="stat-number">20.5k</h1>
                  <p className="stat-text">Successfully Trained</p>
                  <h1 className="stat-number">450+</h1>
                  <p className="stat-text">Students Community</p>
                </div>
              </div>
            </div>

            {/* <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src={Assets.LaptopUse}
                alt="Loading...."
                className="img-fluid"
              />
            </div> */}
            <div className="col-md-4 d-flex flex-column align-items-center  p-md-5">
              <h1>Creative agency and their best solutions</h1>
              <p>Ultrices gravida dictum fusce ut placerat orci nulla</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-section text-black py-5 ">
        <div className="container">
          <div className="row justify-content-center p-5">
            <div className="col-md-4 col-12 d-flex flex-column align-items-center custom-gap mb-4">
              <h1 className="textCenter">
                Create an Effective Web Interior Design
              </h1>
              <p className="textCenter">
                You can accept or decline this invitation. You can also head
                over to https://github.com/Leadsensegithub/hanish to check out
                the repository or visit @Leadsensegithub to learn a bit more
                about them.
              </p>
              <button className="btn btn-primary mb-4">Contact us</button>
            </div>
            {/* <div className="col-md-4 col-12 d-flex flex-column align-items-center custom-gap mb-4">
              <img src={Assets.LaptopUse} className="imgLap"></img>
            </div> */}
            <div className="col-md-4 col-12 d-flex flex-column align-items-center">
              <div
                className={`d-flex justify-content-between align-items-center w-100 mb-3 colourBlue ${
                  para && "onClickColour"
                }`}
              >
                <p className={`mb-0 ${colour}`}>
                  These Causes are perfectly simple.
                </p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i
                    className="fa-solid fa-arrow-right"
                    onMouseOverCapture={changeHoverColour}
                  >
                    {" "}
                  </i>
                </span>
              </div>
              {para && (
                <div className="text-start w-100 pl-4">
                  <small>
                    In this fast-paced party game based on the hit TV game show,
                    two clue-givers bet on how few words they'll need to have
                    their teammate(s) guess five secret answers, starting at 25.
                    The lowest bidder takes the card and must beat the challenge
                    within their limited clues–and time!
                  </small>
                </div>
              )}
              <hr className="w-100" />
              <div className="d-flex justify-content-between align-items-center w-100 mb-3 colourBlue">
                <p className="mb-0">These Causes are perfectly simple.</p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <hr className="w-100" />

              <div className="d-flex justify-content-between align-items-center w-100 mb-3 colourBlue">
                <p className="mb-0">These Causes are perfectly simple.</p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <hr className="w-100" />

              <div className="d-flex justify-content-between align-items-center w-100 mb-3 colourBlue">
                <p className="mb-0">These Causes are perfectly simple.</p>
                <span
                  onClick={handleclick}
                  style={{ cursor: "pointer" }}
                  className="ml-3"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <Timeline />
        <div className="w-75 mx-auto">
          <h1 className="">Our Knowledge Partners</h1>
          <SliderTiedUpCompany />
        </div>
      </div>
      <section className="team-section my-5">
        <div className="container">
          <h1 className="text-center mb-4">
            Our awarded speakers & Team mentors
          </h1>
          <div className="row justify-content-evenly">
            {reviews.map((rev, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-5 card1 mx-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={rev.imgSrc}
                    alt="team member"
                    className="img-fluid re-img"
                  />
                  <h5>{rev.name}</h5>
                </div>
                <div className="text-center">
                  <p>{rev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reviewButton">
          <button className="btn btn-primary btn-lg" onClick={toggleModal}>
            Review us
          </button>
        </div>
      </section>

      {/* <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-center text-danger">LeadSense</h5>
              <p className="text-start">
                To envision LeadSense as a trusted global leader in the digital
                landscape, providing online solutions for individuals and
                businesses.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-danger">Useful Links</h5>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <NavLink to={"/"} className="custom-nav-link">Home</NavLink>
                </li>
                <li className="ml-3">
                  <NavLink to={"/aboutus"} className="custom-nav-link">About Us</NavLink>
                </li>
                <li className="ml-3">
                  <NavLink to={"/services"} className="custom-nav-link">Services</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="text-danger">Contact Us</h5>
              <p>Flat No 11, 3rd Floor, C wing Parsn Manere,Gangaikaraipuram, Anna Salai, Chennai 600006, Tamil Nadu</p>
              <p>Email: john@theleadsense.com</p>
              <p>Phone: +91 9498325088</p>
              <div className="d-flex justify-content-center">
                <NavLink
                  to="https://www.instagram.com"
                  className="custom-nav-link "
                >
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </NavLink>
                <NavLink
                  to="https://web.whatsapp.com/"
                  className="custom-nav-link ml-3"
                >
                  <i className="fa-brands fa-whatsapp fa-xl"></i>
                </NavLink>
                <NavLink
                  to="https://www.facebook.com/Meta"
                  className="custom-nav-link ml-3"
                >
                  <i className="fa-brands fa-facebook fa-xl"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <Fotter />
    </div>
  );
}

export default AboutUs;
