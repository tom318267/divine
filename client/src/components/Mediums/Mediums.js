import React from "react";
import avatar from "../../assets/avatar5.jpg";
import avatar2 from "../../assets/avatar6.jpg";
import avatar3 from "../../assets/avatar7.jpg";
import avatar4 from "../../assets/avatar8.jpg";
import avatar5 from "../../assets/avatar9.jpg";
import psychic from "../../assets/psychic.png";
import stars from "../../assets/stars.png";
import stars3 from "../../assets/stars3.png";
import { Link } from "react-router-dom";
import "./Mediums.scss";

const Mediums = () => {
  return (
    <div className="Mediums">
      <div className="heading-container">
        <h3>
          <span>
            <img id="medium-logo" src={psychic} alt="medium-logo" />
          </span>
          Mediums
        </h3>
      </div>

      <div className="medium-container">
        <div className="img-star-container">
          <img className="medium-img" src={avatar} alt="medium-img" />
          <h5>Lisa</h5>
          <img className="stars" src={stars} alt="stars-img" />
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
            <Link class="waves-effect waves-light btn">Select</Link>
          </div>
        </div>
      </div>

      <div className="medium-container">
        <div className="img-star-container">
          <img className="medium-img" src={avatar2} alt="medium-img" />
          <h5>Frank</h5>
          <img className="stars" src={stars} alt="stars-img" />
        </div>
        <div className="info-price-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequuntur saepe repellendus quisquam mollitia eveniet laboriosam,
            illum vitae qui error, fuga molestiae ea similique aspernatur
            voluptatem obcaecati. Quibusdam, eveniet minima!
          </p>
          <div className="session-book-div">
            <li>$95 per session</li>
            <Link class="waves-effect waves-light btn">Select</Link>
          </div>
        </div>
      </div>

      <div className="medium-container">
        <div className="img-star-container">
          <img className="medium-img" src={avatar3} alt="medium-img" />
          <h5>Kelly</h5>
          <img className="stars" src={stars} alt="stars-img" />
        </div>
        <div className="info-price-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequuntur saepe repellendus quisquam mollitia eveniet laboriosam,
            illum vitae qui error, fuga molestiae ea similique aspernatur
            voluptatem obcaecati. Quibusdam, eveniet minima!
          </p>
          <div className="session-book-div">
            <li>$80 per session</li>
            <Link class="waves-effect waves-light btn">Select</Link>
          </div>
        </div>
      </div>
      <div className="medium-container">
        <div className="img-star-container">
          <img className="medium-img" src={avatar4} alt="medium-img" />
          <h5>Stacy</h5>
          <img className="stars" src={stars3} alt="stars-img" />
        </div>
        <div className="info-price-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequuntur saepe repellendus quisquam mollitia eveniet laboriosam,
            illum vitae qui error, fuga molestiae ea similique aspernatur
            voluptatem obcaecati. Quibusdam, eveniet minima!
          </p>
          <div className="session-book-div">
            <li>$80 per session</li>
            <Link class="waves-effect waves-light btn">Select</Link>
          </div>
        </div>
      </div>
      <div className="medium-container">
        <div className="img-star-container">
          <img className="medium-img" src={avatar5} alt="medium-img" />
          <h5>Stephanie</h5>
          <img className="stars" src={stars3} alt="stars-img" />
        </div>
        <div className="info-price-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequuntur saepe repellendus quisquam mollitia eveniet laboriosam,
            illum vitae qui error, fuga molestiae ea similique aspernatur
            voluptatem obcaecati. Quibusdam, eveniet minima!
          </p>
          <div className="session-book-div">
            <li>$75 per session</li>
            <Link class="waves-effect waves-light btn">Select</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediums;
