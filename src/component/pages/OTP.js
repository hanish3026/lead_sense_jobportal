import React, { useState } from "react";
import "../css/OTP.css";
import { useNavigate } from "react-router-dom";
import Button from "../com/Button";
import Fotter from "../com/Fotter";
import PageHeader from "../com/PageHeader";

function OTP({ onNext }) {
  const nav = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, SetError] = useState(false);
  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // const handleBackspace = (e, index) => {
  //   if (e.key === "Backspace" && index > 0 && !otp[index]) {
  //     document.getElementById(`otp-input-${index - 1}`).focus();
  //   }
  // };

  const handleButton = () => {
    const otpCheck = "0,0,0,0";
    let otpString = otp.toString();
    if (otpString === otpCheck) {
      nav("/workstatus");
      onNext();
    } else {
      SetError(true);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };
  return (
    <div>
      <PageHeader/>
      <div className="Box-border">
        <p className="text-center mt-5 text-danger">
          An OTP has been sent to your registered email address. Please check
          your inbox and enter the code to proceed.
        </p>

        <div className="d-flex justify-content-center otp_input">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              className="form-control otp-box"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          ))}
        </div>
        <div>
          {error && <small className="text-danger">OTP is InValid</small>}
        </div>
        <div className="d-flex justify-content-md-end justify-content-center mt-4">
          <Button onClick={handleButton}>Next</Button>
        </div>
      </div>

    </div>
  );
}

export default OTP;
