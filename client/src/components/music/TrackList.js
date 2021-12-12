import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import "./TrackList.css";

export default function TrackLIst({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div className="track-container" onClick={handlePlay}>
      <div className="track-image">
        <img src={track.albumUrl} alt="" />
      </div>
      <div className="track-text-container">
        <div className="track-title">{track.title}</div>
        <div className="track-artist">{track.artist}</div>
      </div>
      <div className="track-play-container">
        <PlayCircleIcon style={{ fontSize: 40 }} className="track-play-icon" />
      </div>
    </div>
  );
}
