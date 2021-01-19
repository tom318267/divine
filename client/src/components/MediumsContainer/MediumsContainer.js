import React from "react";
import { Link } from "react-router-dom";

const Medium = ({ medium }) => {
  return (
    <div>
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
              <Link
                style={{ marginRight: "10px" }}
                class="waves-effect waves-light btn"
              >
                Select
              </Link>
              <Link
                style={{ marginRight: "10px" }}
                to={`/add-review/${medium.id}`}
                class="waves-effect waves-light btn"
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

export default Medium;
