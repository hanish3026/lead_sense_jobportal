import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Search.css";
import Assets from "../assets/Assets";
import SideBar from "../com/SideBar";
import Fotter from "../com/Fotter";

function Search() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const users = [
    {
      name: "John",
      education: "Bachelor of Computer Science",
      role: "React Developer",
      certifications: "MERN Stack Development, React.js Certification",
      experience: "2 years",
    },
    {
      name: "Jane",
      education: "Master of Information Technology",
      role: "Backend Developer",
      certifications: "Node.js, MongoDB Certification",
      experience: "3 years",
    },
    {
      name: "Alice",
      education: "Bachelor of Software Engineering",
      role: "Full-Stack Developer",
      certifications: "React.js, Node.js, MongoDB",
      experience: "4 years",
    },
    {
      name: "Bob",
      education: "Master of Data Science",
      role: "Data Scientist",
      certifications: "Python, Machine Learning",
      experience: "5 years",
    },
    {
      name: "Charlie",
      education: "Bachelor of Information Technology",
      role: "Frontend Developer",
      certifications: "React, Redux, HTML5, CSS3",
      experience: "2 years",
    },
  ];

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo">
            <img src={Assets.LSmediaLOGO} alt="Logo" className="navbar-logo" />
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="navbar-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* Navbar Links */}
          <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <button className="btn btn-danger" onClick={handleLogout}>
                  LogOut
                </button>
              </li>
              <li>
                <img
                  src={Assets.EmptyProfile}
                  className="emptyprofile"
                  onClick={() => navigate("/profile")}
                  alt="Profile"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="search-page">
        <SideBar />
        <div className="content-container">
          <div className="filter-container">
            {/* Header Section */}
            <div className="header">
              <h2>
                <i className="fas fa-briefcase"></i> Find the Right Candidate
              </h2>
              <p className="subtitle">
                Filter candidates based on your requirements
              </p>
            </div>

            {/* Filter Section */}
            <div className="filter-row">
              <div className="filter-item">
                <input
                  id="education"
                  type="text"
                  placeholder="Enter Education"
                  className="filter-input"
                />
              </div>
              <div className="filter-item">
                <input
                  id="experience"
                  type="text"
                  placeholder="Enter Experience"
                  className="filter-input"
                />
              </div>
              <div className="filter-item">
                <input
                  id="role"
                  type="text"
                  placeholder="Enter Role"
                  className="filter-input"
                />
              </div>
              <div className="filter-item">
                <button className="filter-btn">Filter</button>
              </div>
            </div>
          </div>

          {/* User Cards Section */}
          <div className="container user-cards">
            <div className="row">
              {users.map((user, index) => (
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  key={index}
                >
                  <div className="cards shadow-sm user-profile-card">
                    <div className="d-flex flex-column align-items-center p-3">
                      <img
                        src={Assets.RoundImg}
                        alt="User Profile"
                        className="img-fluid rounded-circle mb-3 user-profile-pic"
                      />
                      <div className="user-info">
                        <h5 className="text-center text-primary card-title">
                          {user.name}
                        </h5>
                        <p>
                          <strong>Education:</strong> {user.education}
                        </p>
                        <p>
                          <strong>Experience:</strong> {user.experience}
                        </p>
                        <p>
                          <strong>Role:</strong> {user.role}
                        </p>
                        <button
                          onClick={() => navigate("/lastpage")}
                          className="btn btn-danger view-btn"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

   <Fotter />
    </>
  );
}

export default Search;
