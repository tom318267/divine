import React from "react";
import moon from "../../assets/moon.png";
import cloud from "../../assets/cloud.png";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage animate__animated animate__bounceInDown">
      <h1>WE SEE YOUR LOVE, PROMISE, AND FUTURE.</h1>
      <h2>
        Select one of our very gifted mediums and see what your future holds!
      </h2>
      <div className="home-buttons">
        <Link
          to="/register"
          className="waves-effect waves-light btn-large started"
        >
          Get Started
        </Link>
        <Link className="waves-effect waves-light btn-large learn">
          Learn More
        </Link>
      </div>
      <div className="images">
        <img id="moon" src={moon} alt="" />
        <img id="cloud" src={cloud} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
