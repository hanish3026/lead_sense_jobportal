import React, { useState, useRef } from "react";
import "../css/OTP.css";
import { useNavigate } from "react-router-dom";
import Button from "../com/Button";
import PageHeader from "../com/PageHeader";

const CompanyOtp = ({ otpLength = 4 }) => {
  const nav = useNavigate();
  const [otp, setOtp] = useState(Array(otpLength).fill(""));
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleButton = () => {
    const otpCheck = "0000";
    if (otp.join("") === otpCheck) {
      nav("/card");
    } else {
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };

  return ( 
    <div>
      <PageHeader />
      <div className="Box-border">
        <p className="text-center mt-5 text-danger">
          An OTP has been sent to your registered email address. Please check
          your inbox and enter the code to proceed.
        </p>

        <div className="d-flex justify-content-center otp_input">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              className="form-control otp-box"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => {
                handleBackspace(e, index);
                handleKeyDown(e);
              }}
              aria-label={`OTP input ${index + 1}`}
            />
          ))}
        </div>
        {error && <div className="text-center text-danger mt-2">OTP is Invalid</div>}
        <div className="d-flex justify-content-md-end justify-content-center mt-4">
          <Button onClick={handleButton}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyOtp;
