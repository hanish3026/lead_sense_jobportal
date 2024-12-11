/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Assets from "../assets/Assets";

const DefaultCard = () => {
  return (
    <div>
      <div class="card">
        <img
          className="rounded-5"
          src={Assets.GroupImg}
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#!" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
