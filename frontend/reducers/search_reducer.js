import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, action.searchResults);
    default:
      return state;
  }
};
