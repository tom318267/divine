import axios from "axios";
import {
  // GET_REVIEW,
  GET_REVIEWS,
  REVIEW_ERROR,
  ADD_REVIEW,
} from "../actions/types";

// Get Reviews
export const getReviews = () => async (dispatch) => {
  try {
    const res = await axios.get("/reviews");
    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Post Review
export const addReview = (formData, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(`/reviews/add-review/${id}`, formData, config);

    dispatch({
      type: ADD_REVIEW,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
