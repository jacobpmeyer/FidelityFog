export const fetchAllTracks = () => (
  $.ajax({
    url: '/api/tracks',
    method: 'GET'
  })
)

export const fetchTrack = (trackId) => (
  $.ajax({
    url: `/api/tracks/${trackId}`,
    method: 'GET'
  })
)

export const createTrack = (track) => {
  console.log(track)
  return $.ajax({
    url:`/api/tracks/`,
    method: 'POST',
    data: track,
    processData: false,
    contentType: false,
  })
}

export const updateTrack = (track) => (
  $.ajax({
    url: `/api/tracks/${track.id}`,
    method: 'PATCH',
    data: { track }
  })
)

export const deleteTrack = (trackId) => (
  $.ajax({
    url: `/api/tracks/${trackId}`,
    method: `DELETE`
  })
)