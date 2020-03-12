import { combineReducers } from 'redux'
import ModalReducer from './modal_reducer'
import TrackUiReducer from './track_ui_reducer'
import PlayingUiReducer from './playing_ui_reducer'

const UiReducer = combineReducers({
  modal: ModalReducer,
  currentTrack: TrackUiReducer,
  playing: PlayingUiReducer,
})

export default UiReducer



