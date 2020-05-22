export const searchForTracks = (request) =>
  $.ajax({
    url: `/api/search/`,
    method: "GET",
    data: { request },
  });
