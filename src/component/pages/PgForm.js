import React, { useEffect, useState } from "react";
import Button from "../com/Button";
import SkipButton from "../com/SkipButton";
import { useNavigate } from "react-router-dom";
import Loader from "../com/Loader";
import Fotter from "../com/Fotter";
import PageHeader from "../com/PageHeader";

const PgForm = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({
    collegeName: null,
    course: null,
    specialization: null,
    file: null,
  });
  const nav = useNavigate();

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        nav("/ugdetails");
      }, 2000);
    }
  }, [loader, nav]);

  const [formData, setFormData] = useState({
    collegeName: null,
    course: null,
    specialization: null,
  });
  const [file, setFile] = useState(null);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
  }
  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    validateField("file", selectedFile);
  }

  const validateField = (fieldName, value) => {
    setError((prevState) => ({
      ...prevState,
      [fieldName]: value ? null : `Please enter the ${fieldName}`,
    }));
  };

  function handleButton() {
    const isValid =
      formData.collegeName &&
      formData.course &&
      formData.specialization &&
      file;
    if (isValid) {
      setLoader(true);
    } else {
      validateField("collegeName", formData.collegeName);
      validateField("course", formData.course);
      validateField("specialization", formData.specialization);
      validateField("file", file);
    }
  }

  function handleButtonSkip() {
    console.log(formData);
    setLoader(true);
  }

  return (
    <div>
      <PageHeader/>
      <div className="container">
        {loader && <Loader />}
        <div>
          <label className="d-flex mt-2">PG university name/college</label>
          <input
            type="text"
            className="form-control w-50"
            name="collegeName"
            value={formData.collegeName || ""}
            onChange={(e) => handleChange(e)}
          />
          {error.collegeName && (
            <small className=" d-flex text-danger">{error.collegeName}</small>
          )}
        </div>

        <div>
          <label className="d-flex">Course</label>
          <input
            type="text"
            className="d-flex mt-3 form-control w-50"
            name="course"
            value={formData.course || ""}
            onChange={(e) => handleChange(e)}
          />
          {error.course && (
            <small className=" d-flex text-danger">{error.course}</small>
          )}
        </div>

        <div>
          <label className="d-flex">Specialization</label>
          <input
            type="text"
            className="d-flex mt-3 form-control w-50"
            name="specialization"
            value={formData.specialization || ""}
            onChange={(e) => handleChange(e)}
          />
          {error.specialization && (
            <small className="d-flex text-danger">{error.specialization}</small>
          )}
        </div>

        <div>
          <label className="d-flex">Certificate upload</label>
          <input
            type="file"
            className="d-flex mt-3"
            name="file"
            accept=".pdf"
            onChange={(e) => handleFileChange(e)}
          />
          {error.file && (
            <small className=" d-flex text-danger">{error.file}</small>
          )}
        </div>

        <div className="d-flex justify-content-md-end justify-content-center mt-4">
          <div className="me-3 mb-2">
            <SkipButton onClick={handleButtonSkip}>Skip</SkipButton>
          </div>
          <div className="mb-2">
            <Button onClick={handleButton}>Next</Button>
          </div>
        </div>

        <div className="mt-5">
          <p className="d-flex">Note:</p>
          <div className="d-flex">
            <p>Please enter a university name along with college name</p>
          </div>
          <div className="d-flex">
            <p>
              Please upload a valid PDF file. Other file types will not be
              accepted.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PgForm;
