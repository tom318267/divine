import axios from "axios";
import {
  // GET_REVIEW,
  GET_REVIEWS,
  REVIEW_ERROR,
  ADD_REVIEW,
} from "../actions/types";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

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

    Toast.fire({
      icon: "success",
      title: "Review sent!",
      iconColor: "#a98ef7",
    });
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
