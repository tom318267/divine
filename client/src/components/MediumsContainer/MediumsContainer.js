import React from "react";
import { Link } from "react-router-dom";
import "./MediumsContainer.scss";

const MediumsContainer = ({ medium }) => {
  return (
    <div className="MediumsContainer">
      <div className="medium-container">
        <div className="img-star-container">
          <img className="medium-img" src={medium.image} alt="medium-img" />
          <h5 style={{ fontWeight: "600" }}>{medium.name}</h5>
        </div>
        <div className="info-price-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequuntur saepe repellendus quisquam mollitia eveniet laboriosam,
            illum vitae qui error, fuga molestiae ea similique aspernatur
            voluptatem obcaecati. Quibusdam, eveniet minima!
          </p>
          <div className="session-book-div">
            <li>$100 per session</li>
            <div className="select-review-div">
              <Link className="waves-effect waves-light btn">Select</Link>
              <Link
                to={`/add-review/${medium.id}`}
                className="waves-effect waves-light btn"
              >
                Post Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumsContainer;
