import { useState } from "react";
import Button from "../com/Button";
import { useNavigate } from "react-router-dom";
 
import PageHeader from "../com/PageHeader";
import Assets from "../assets/Assets";
import vedio from "../assets/vedio.mp4"
const VedioUploadPage = ({ onNext }) => {
  const nav = useNavigate();
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select a video file to upload.");
    }
  }

  function handleButton() {
    if (file) {
      nav("/lastpage");
      onNext();
    } else {
      setError("Please select a video file to upload.");
    }
  }

  return (
    <div>
      <PageHeader/>
    <div className="container">
    <div className="row">
      <div className="col-md-6">
      <div className="container d-flex mt-5">
        <div className="d-flex flex-column mt-5">
          <div className="d-flex">Please create a short,</div>
          <div className="d-flex">engaging video and upload it </div>
          <div className="d-flex">here for everyone to view</div>
        </div>
      </div>
      <div className="container d-flex mt-5">
        <input type="file" onChange={handleChange} />
      </div>
      {error && <div className=" d-flex text-danger mt-2">{error}</div>}
      </div>
      <div className="col-md-6">
        <div >
          <img src={vedio} type="video/mp4" alt="Loading..." className="m-md-100"></img>
        </div>
      </div>
    </div>
      <div className="d-flex justify-content-end mt-5">
        <Button onClick={handleButton}>Submit</Button>
      </div>
      </div>
    </div>
  );
};

export default VedioUploadPage;
