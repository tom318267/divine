import lisa from "../assets/avatar5.jpg";
import frank from "../assets/avatar6.jpg";
import kelly from "../assets/avatar7.jpg";
import stacy from "../assets/avatar8.jpg";
import stephanie from "../assets/avatar9.jpg";

const INITIAL_STATE = {
  mediums: [
    {
      name: "Lisa",
      image: lisa,
      id: 1,
      linkUrl: "mediums/lisa",
    },
    {
      name: "Frank",
      image: frank,
      id: 2,
      linkUrl: "mediums/frank",
    },
    {
      name: "Kelly",
      image: kelly,
      id: 3,
      linkUrl: "mediums/kelly",
    },
    {
      name: "Stacy",
      image: stacy,
      id: 4,
      linkUrl: "mediums/stacy",
    },
    {
      name: "Stephanie",
      image: stephanie,
      id: 5,
      linkUrl: "mediums/stephanie",
    },
  ],
};

export const mediumsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
