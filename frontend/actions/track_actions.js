import * as trackApiUtil from '../util/track_api_util'

export const RECEIVE_TRACK = "RECEIVE_TRACK"
export const REMOVE_TRACK = "REMOVE_TRACK"
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS"
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS"

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
})

const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
})

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
})

const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
})

export const fetchAllTracks = () => dispatch => (
  trackApiUtil.fetchAllTracks()
    .then(tracks => dispatch(receiveAllTracks(tracks)))
)

export const fetchTrack = track => dispatch => (
  trackApiUtil.fetchTrack(track)
    .then(track => dispatch(receiveTrack(track)),
      err => dispatch(receiveTrackErrors(err.responseJSON))
    )
)

export const createTrack = track => dispatch => (
  trackApiUtil.createTrack(track)
    .then(track => dispatch(receiveTrack(track)),
      err => dispatch(receiveTrackErrors(err.responseJSON))
    )
)

export const updateTrack = track => dispatch => (
  trackApiUtil.updateTrack(track)
    .then(track => dispatch(receiveTrack(track)),
      err => dispatch(receiveTrackErrors(err.responseJSON))
    )
)

export const deleteTrack = trackId => dispatch => (
  trackApiUtil.deleteTrack(trackId)
    .then(() => dispatch(removeTrack(trackId)))
)