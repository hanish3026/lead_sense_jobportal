import React from 'react'
import { NavLink } from 'react-router-dom'

const Fotter = () => {
  return (
    <div className='mt-5'>
<footer className="bg-dark text-white py-5 ">
        <div className="container-fluid">
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
      </footer>
    </div>
  )
}

export default Fotter