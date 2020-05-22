import * as searchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults,
});

export const searchForTracks = (request) => (dispatch) =>
  searchApiUtil
    .searchForTracks(request)
    .then((searchResults) => dispatch(receiveSearchResults(searchResults)));
