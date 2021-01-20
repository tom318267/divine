import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getReviews } from "../../actions/reviews";
import StarRating from "../StarRating/StarRating";
import "./Reviews.scss";

const Reviews = ({ reviews: { reviews }, getReviews }) => {
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="Reviews">
      <div className="flex-container">
        <h3>
          <i className="far fa-thumbs-up"></i> Customer Reviews
        </h3>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="reviews hvr-grow ">
              <h5>{review.title}</h5>
              <StarRating rating={review.rating} />
              <p>{review.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps, { getReviews })(Reviews);
