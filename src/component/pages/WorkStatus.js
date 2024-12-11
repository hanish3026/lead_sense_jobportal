import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../com/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../com/Loader";
import PageHeader from "../com/PageHeader";
import makeAnimated from "react-select/animated";

const WorkStatus = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    workStatus: null,
    city: null,
    updates: null,
  });

  const [error, setError] = useState({
    WorkStatusError: null,
    cityError: null,
  });
  const animatedComponents = makeAnimated();
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        nav("/pgdetails");
      }, 3000);
    }
    console.log(formData)
  },[formData,loading,nav]);

  const handleButton = () => {
    setError({ WorkStatusError: null, cityError: null });
    let isValid = true;
    if (!formData.workStatus) {
      setError((prevState) => ({
        ...prevState,
        WorkStatusError: "Please select your work status",
      }));
      isValid = false;
    }

    if (!formData.city) {
      setError((prevState) => ({
        ...prevState,
        cityError: "Please select your city",
      }));
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
    }
  };

  const options = [
    { value: "chennai", label: "Chennai" },
    { value: "bangalore", label: "Bangalore" },
  ];

  const [buttonColorExp, setButtonColorExp] = useState("outline-secondary");
  const [buttonColorFrsh, setButtonColorFrsh] = useState("outline-secondary");

  const handleButtonExp = () => {
    setFormData((prevState) => ({
      ...prevState,
      workStatus: "Experienced",
    }));
    setButtonColorExp("success");
    setButtonColorFrsh("outline-secondary");
    setError((prevState) => ({
      ...prevState,
      WorkStatusError: null,
    }));
  };

  const handleButtonFrsh = () => {
    setFormData((prevState) => ({
      ...prevState,
      workStatus: "Fresher",
    }));
    setButtonColorFrsh("success");
    setButtonColorExp("outline-secondary");

    setError((prevState) => ({
      ...prevState,
      WorkStatusError: null,
    }));
  };

  const handleChangeDropDown = (name, selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
    if (name === "city") {
      setError((prevState) => ({
        ...prevState,
        cityError: null,
      }));
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      updates: e.target.checked,
    }));
  };

  return (
    <div>
      <PageHeader />
      {loading ? <Loader /> : <></>}
      <div className="container mt-4">
        <div className="d-flex justify-content-start my-3 mb-0">
          <h6 className="mb-0">Work Status</h6>
        </div>
        <div className="d-flex justify-content-start">
          <button
            className={`btn btn-${buttonColorExp} btn-lg m-2 p-4 mt-2`}
            onClick={handleButtonExp}
          >
            I'm Experienced
          </button>
          <button
            className={`btn btn-${buttonColorFrsh} btn-lg m-2`}
            onClick={handleButtonFrsh}
          >
            I'm a Fresher
          </button>
        </div>
        {error.WorkStatusError && (
          <div className="d-flex justify-content-start text-danger mt-2">
            <small>{error.WorkStatusError}</small>
          </div>
        )}
        <div className="d-flex flex-column align-items-start my-4">
          <h6 className="mb-4">City</h6>
          <p className="ml-3">Mention the city you live in</p>
          <div className="d-flex align-items-start">
            <p className="me-3">Suggestions:</p>
          </div>
          <div className="d-flex align-items-start">
            {/* <Select
              options={options}
              onChange={(selectedOption) =>
                handleChangeDropDown("city", selectedOption)
              }
              
            /> */}
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              isMulti
              options={options}
              isClearable={false}
              onChange={(selectedOption) => {
                // Limit selection to only one option
                const singleOption = selectedOption
                  ? [selectedOption[selectedOption.length - 1]]
                  : [];
                handleChangeDropDown("city", singleOption);
                
              }}
              className="w-100 w-md-50"
            />
          </div>
          {error.cityError && (
            <div className="d-flex justify-content-start text-danger mt-2">
              <small>{error.cityError}</small>
            </div>
          )}
        </div>

        <div className="form-check mt-4 d-flex align-items-start">
          <input
            type="checkbox"
            className="form-check-input"
            id="updatesCheck"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="updatesCheck">
            Send me important updates & promotions via SMS, email, and WhatsApp
          </label>
        </div>

        <div className="d-flex justify-content-md-end justify-content-center my-4">
          <Button onClick={handleButton}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default WorkStatus;

