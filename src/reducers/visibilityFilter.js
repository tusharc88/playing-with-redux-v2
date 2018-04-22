import { SET_VISIBILITY_FILTER } from "../constants";
import { ALL_FILTER } from "../constants";

const visibilityFilter = (state = ALL_FILTER, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
