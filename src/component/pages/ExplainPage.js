import React, { useEffect, useState } from "react";
import Button from "../com/Button";
import SkipButton from "../com/SkipButton";
import Loader from "../com/Loader";
import { useNavigate } from "react-router-dom";
import PageHeader from "../com/PageHeader";

const ExplainPage = () => {
  const [loader, setLoader] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  const isLargeScreen = window.innerWidth > 768;
  const style = {
    marginLeft: isLargeScreen? "510px":"0px"
  };
  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        nav("/personalsurvey");
      }, 2000);
    }
  }, [loader, nav]);

  const countWords = (text) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const handleButton = () => {
    const wordCount = countWords(explanation);
    if (wordCount === 50) {
      setLoader(true);
    } else {
      setError("Please enter exactly 50 words.");
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setExplanation(input);
    const wordCount = countWords(input);
    if (wordCount === 50) {
      setError("");
    } else {
      setError("Please enter exactly 50 words.");
    }
  };

  const handleButtonSkip = () => {
    setLoader(true);
  };

  return (
    <div>
      <PageHeader/>
      {loader && <Loader />}
      <div className="container">
        <div className="container d-flex justify-content-start">
          <h5 className="mt-4">Explain about yourself</h5>
        </div>

        <div className="container">
          <textarea
            className="form-control w-100 w-sm-100"
            style={{ height: "300px" }}
            onChange={handleChange}
            value={explanation}
          />
          {error && (
            <small className="d-flex text-danger d-block mt-2">{error}</small>
          )}
                    <small
            className="text-md-end mt-1 d-flex justify-content-end"
            style={style}
          >
            {countWords(explanation)}/50 words
          </small>
        </div>

        <div>

        </div>
        <div className="d-flex justify-content-center justify-content-md-end mt-4">
          <div className="me-3 mb-2">
            <SkipButton onClick={handleButtonSkip}>Skip</SkipButton>
          </div>
          <div className="mb-2">
            <Button onClick={handleButton}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainPage;
