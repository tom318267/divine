import React, { useState } from "react";
import { connect } from "react-redux";
import { addReview } from "../../actions/reviews";
import "./PostReview.scss";

const PostReview = ({ addReview, history, match }) => {
  const [form, setForm] = useState({
    title: "",
    rating: "",
    body: "",
  });

  const { title, rating, body } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addReview(form, match.params.id);
    history.push("/reviews");
  };

  return (
    <div className="PostReview">
      <div className="row">
        <form onSubmit={onSubmit} className="col s12">
          <h4>Post Review</h4>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onChange}
                id="title"
                type="text"
                className="validate"
                name="title"
                value={title}
                required
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onChange}
                id="rating"
                type="text"
                className="validate"
                name="rating"
                value={rating}
                required
              />
              <label htmlFor="rating">Rating(1-5)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                onChange={onChange}
                id="body"
                type="text"
                className="validate"
                name="body"
                value={body}
                required
              ></textarea>
              <label id="review-label" htmlFor="body">
                Your Review
              </label>
            </div>
          </div>
          <button
            class="waves-effect waves-light btn-large"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addReview })(PostReview);
