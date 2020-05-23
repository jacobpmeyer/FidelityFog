import React from "react";
import { Link } from "react-router-dom";
import WaveformContainer from "../waveform/waveform_container";
import Comments from "../comments/CommentsContainer";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
    this.ref = React.createRef();
    this.handlePlay = this.handlePlay.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
    window.scrollTo(0, 0);
  }

  handlePlay() {
    const { playing, currentTrack, track } = this.props;
    if (playing && track.id === currentTrack.id) {
      return () => {
        this.props.pauseTrack();
        this.props.updateCurrentTrack(this.props.track);
        this.setState({ playing: false });
      };
    } else if (playing) {
      return () => {
        this.props.pauseTrack();
        this.props.updateCurrentTrack(this.props.track);
        this.setState({ playing: true });
        this.props.playTrack();
      };
    } else {
      return () => {
        this.props.updateCurrentTrack(this.props.track);
        this.props.playTrack();
        this.setState({ playing: true });
      };
    }
  }

  handleDestroy(e) {
    this.props
      .deleteTrack(this.props.track.id)
      .then(this.props.history.push("/"));
  }

  render() {
    const { track, currentUser, playing, currentTrack } = this.props;
    let logo;
    let button;
    if (playing && currentTrack.id === track.id) {
      logo = "pause-button";
      button = <img src={window.pause} alt="pause button" />;
    } else {
      logo = "play-button";
      button = <img src={window.play} alt="play button" />;
    }

    let deleteButton;
    let editButton;
    const artistId = track ? track.artistId : null;
    if (currentUser && currentUser.id === artistId) {
      deleteButton = (
        <div className="delete-button">
          <button onClick={this.handleDestroy}>Delete Track</button>
        </div>
      );
      editButton = (
        <div className="edit-button">
          <Link to={`/tracks/${track.id}/edit`}>Edit Track</Link>
        </div>
      );
    } else {
      deleteButton = null;
      editButton = null;
    }

    let trackD;
    if (track === undefined) {
      trackD = null;
    } else {
      if (track.description) {
        trackD = (
          <div className="track-show-description">{track.description}</div>
        );
      } else {
        trackD = null;
      }
    }

    if (track === undefined) {
      return null;
    } else {
      return (
        <div className="user-show">
          <div className="track-show">
            <div className="left-show-elements">
              <div className="track-details-show">
                <div className={logo} onClick={this.handlePlay()}>
                  {button}
                </div>
                <ul>
                  <li className="artist-link-show">
                    <Link to={`/users/${track.artistId}`}>
                      {track.artistName}
                    </Link>
                  </li>
                  <li className="track-link-show">
                    {track.artistName} - {track.title}
                  </li>
                </ul>
              </div>
              <div className="track-show-description-container">{trackD}</div>
              <div className="show-buttons">
                {deleteButton}
                {editButton}
              </div>
            </div>
            <div className="album-art">
              <img src={track.albumArt} alt={`${track.title} album art`} />
            </div>
            <audio src={track.trackFile} ref={this.ref} />
          </div>
          <Comments trackId={track.id} />
        </div>
      );
    }
  }
}

export default TrackShow;
