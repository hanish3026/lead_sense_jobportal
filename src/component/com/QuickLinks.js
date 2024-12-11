import React, { useState } from "react";
import "../css/QuickLinks.css";

function QuickLinks({ links , onSelectedLabels}) {
  function handleButton(e){
    onSelectedLabels(e)
  }
  return (
    <div className="quick-link-container" style={{ minHeight: "500px" }}>
      <h2 className="heading title-18-bold">Quick Links</h2>
      <div className="links-container text-start">
        {links.map((link) => (
          <div
            key={link.id}
            data-id={link.id}
            className={`link ${link.active ? "active" : ""}`}
            onClick={()=>handleButton(link.label)} >
            <div className="label title-14-medium">{link.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
