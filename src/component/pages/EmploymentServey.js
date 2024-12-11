import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkipButton from "../com/SkipButton";
import Button from "../com/Button";
import Loader from "../com/Loader";
import Fotter from "../com/Fotter";
import PageHeader from "../com/PageHeader";

const EmploymentSurvey = () => {
  const [loader, setLoader] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        nav("/vedioupload");
      }, 2000);
    }
  }, [loader, nav]);

  const [data, setData] = useState({
    companyName: "",
    Domain: "",
    PFNumberPresent: "",
    CompanyLocation: "",
    CurrentSalary: "",
    ExpectedSalary: "",
    YearsExprience: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    Domain: "",
    PFNumberPresent: "",
    CompanyLocation: "",
    CurrentSalary: "",
    ExpectedSalary: "",
    YearsExprience: "",
  });

  const handleButton = () => {
    const newErrors = {};
    Object.keys(data).forEach((field) => {
      if (!data[field]) {
        newErrors[field] = `Please enter ${field
          .replace(/([A-Z])/g, " $1")
          .toLowerCase()}`;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoader(true);
    }
  };
  function handleButtonSkip() {
    setLoader(true);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Please enter ${name.replace(/([A-Z])/g, " $1").toLowerCase()}`,
      }));
    }
  };

  return (
    <div>
      <PageHeader/>
    <div className="container my-5">
      {loader && <Loader />}
      <h3 className="text-center mb-4">Employment Information</h3>

      <div className="row">
        <div className="col-12 mb-3">
          <label className="d-flex">Company Name</label>
          <input
            onChange={handleChange}
            name="companyName"
            type="text"
            className="form-control w-50"
          />
          <small className=" d-flex text-danger">{errors.companyName}</small>
        </div>

        <div className="col-12 mb-3">
          <label className="d-flex">Domain</label>
          <input
            onChange={handleChange}
            name="Domain"
            type="text"
            className="form-control w-50"
          />
          <small className=" d-flex text-danger">{errors.Domain}</small>
        </div>

        <div className="col-12 mb-3">
          <label className="d-flex">PF Number Present</label>
          <div className="d-flex align-items-center">
            <div className="form-check me-3">
              <input
                type="radio"
                name="PFNumberPresent"
                value="Yes"
                checked={data.PFNumberPresent === "Yes"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check ml-3">
              <input
                type="radio"
                name="PFNumberPresent"
                value="No"
                checked={data.PFNumberPresent === "No"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
          <small className="d-flex text-danger">{errors.PFNumberPresent}</small>
        </div>

        <div className="col-12 mb-3">
          <label className="d-flex">Company Location</label>
          <input
            onChange={handleChange}
            name="CompanyLocation"
            type="text"
            className="form-control w-50"
          />
          <small className="d-flex text-danger">{errors.CompanyLocation}</small>
        </div>

        <div className="col-12 mb-3">
          <label className="d-flex">Current Salary</label>
          <input
            onChange={handleChange}
            name="CurrentSalary"
            type="text"
            className="form-control w-50"
          />
          <small className="d-flex text-danger">{errors.CurrentSalary}</small>
        </div>

        <div className="col-12 mb-3">
          <label className="d-flex">Expected Salary</label>
          <input
            onChange={handleChange}
            name="ExpectedSalary"
            type="text"
            className="form-control w-50"
          />
          <small className="d-flex text-danger">{errors.ExpectedSalary}</small>
        </div>

        <div className="col-12 mb-3">
          <label className="d-flex">Years of Experience</label>
          <input
            onChange={handleChange}
            name="YearsExprience"
            type="text"
            className="form-control w-50"
          />
          <small className="d-flex text-danger">{errors.YearsExprience}</small>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <SkipButton
          onClick={handleButtonSkip}
          className="btn btn-outline-secondary me-3"
        >
          Skip
        </SkipButton>
        <Button onClick={handleButton} className="btn btn-primary mt-5">
          Next
        </Button>
      </div>
      </div>
    </div>
  );
};

export default EmploymentSurvey;
