import React from "react";

export default function TrackLIst({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div onClick={handlePlay}>
      <div className="track-image">
        <img src={track.albumUrl} alt="" />
      </div>
      <div className="track-title">{track.title}</div>
      <div className="track-artist">{track.artist}</div>
    </div>
  );
}
