import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

import "./Player.css";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      // save songs to Spotify library
      showSaveIcon
      // the state will tell if we are playing or not. Everytime a song is changed, played the state will change.
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      // if we have a song to play we will pass into the array
      uris={trackUri ? [trackUri] : []}
      styles={{
        activeColor: "#fff",
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "4rem",
      }}
    />
  );
}
