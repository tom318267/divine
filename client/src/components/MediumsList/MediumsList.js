import React from "react";
import psychic from "../../assets/psychic.png";
import { connect } from "react-redux";
import "./MediumsList.scss";
import MediumsContainer from "../MediumsContainer/MediumsContainer";

const MediumsList = ({ mediums: { mediums } }) => {
  return (
    <div className="MediumsList">
      <div className="heading-container">
        <h3>
          <span>
            <img id="medium-logo" src={psychic} alt="medium-logo" />
          </span>
          Mediums
        </h3>
      </div>
      {mediums.map((medium) => (
        <MediumsContainer medium={medium} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mediums: state.mediums,
});

export default connect(mapStateToProps)(MediumsList);
