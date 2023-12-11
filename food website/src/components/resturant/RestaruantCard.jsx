import React from "react";
import "./ResturantCard.css";
import { IMG_CDN_URL } from "../../constants";

function RestaruantCard({ name, slaString, cuisines, cloudinaryImageId }) {
  return (
    <>
      <div className="mainCard">
        <div className="card">
          <img src={`${IMG_CDN_URL + cloudinaryImageId}`} alt="" />
          <h1>{name}</h1>
          <p>{`Delivery Time ${slaString}`}</p>
          <p>{`Cusines: ${cuisines.join(",")}`}</p>
        </div>
      </div>
    </>
  );
}

export default RestaruantCard;
