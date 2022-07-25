import React, { Component } from "react";
import * as images from "../../../assets/images/Images";
import * as icons from "../../../assets/icons/icons";
import { NavLink } from "react-router-dom";

const sliderData = [
  {
    title: "Amazing Hikings",
    urlImage: icons.backpacking,
  },
  {
    title: "Anywhere",
    urlImage: icons.customisedTrip,
  },
  {
    title: "Family Tours",
    urlImage: icons.trip,
  },
  {
    title: "Family Tours",
    urlImage: icons.trip,
  },
  {
    title: "Family Tours",
    urlImage: icons.trip,
  },
];

export default function Explore() {
  return (
    <NavLink to={"/tours"}>
        <div className="container">
      <div className="explore__container">
        <h1>Explore</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, alias
          aspernatur. Odit harum praesentium odio recusandae error quasi
          nesciunt eos ad! Dolorum ipsum voluptatibus fugit quis animi explicabo
          quod labore.
        </p>
        <div className="explore__container--inner">
          {sliderData.map((item, index) => {
            return (
              <div key={index} className="explore__container--inner-card">
                <img src={item.urlImage} alt="item" />
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </NavLink>
  );
}
