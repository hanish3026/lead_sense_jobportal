import React from "react";
import { useNavigate } from "react-router-dom";
import Assests from "../assets/Assets"
const PageHeader = () => {
  const nav = useNavigate();

  function handleClick() {
    nav(-1);
  }

  return (
    <div className="container">
        <img src={Assests.LSmediaLOGO} style={{width:"100px"}} className="d-flex mb-5"></img>
      <div className="d-flex align-items-center">
        <i
          className="fa-solid fa-circle-chevron-left fa-2xl"
          style={{ color: "#c3c6d1", cursor: "pointer", marginRight: "8px" }}
          onClick={handleClick}
        ></i>
        <span>Back</span>
      </div>
    </div>
  );
};

export default PageHeader;
