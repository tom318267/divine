import {
  GET_REVIEW,
  GET_REVIEWS,
  ADD_REVIEW,
  REVIEW_ERROR,
} from "../actions/types";

const initialState = {
  reviews: [],
  review: null,
  loading: true,
  error: {},
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    case GET_REVIEW:
      return {
        ...state,
        review: action.payload,
        loading: false,
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        loading: false,
      };
    case REVIEW_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
