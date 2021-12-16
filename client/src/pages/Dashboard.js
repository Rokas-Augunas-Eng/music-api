import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SearchIcon from "@mui/icons-material/Search";

import useAuth from "../components/shared/useAuth";
import TrackList from "../components/music/TrackList";
import Player from "../components/music/Player";
import "./Dashboard.css";
import TopBar from "../components/shared/TopBar";

const spotifyApi = new SpotifyWebApi({
  clientId: "9531b419420d41b68c547839eda55aa5",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    // whenb accessToken changes
  }, [accessToken]);

  // searching
  useEffect(() => {
    if (!text) return setSearchResults([]);
    if (!accessToken) return;

    // cancel request everytime you type
    let cancel = false;
    spotifyApi.searchTracks(text).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              // if the current image is smaller than the smallest set that as a smallest iamge
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    // make the request and if a new request is made in that time period, we will set the cancel for the previous request to true, which will cancel the request on line 39
    return () => (cancel = true);
  }, [text, accessToken]);

  return (
    <div>
      <TopBar />
      <div className="dashboard-container">
        <div className="dashboard-search-container">
          <input
            type="text"
            placeholder="Search Songs/Artists"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="dashboard-search"
          />
          <div className="dashboard-search-container">
            <SearchIcon
              className="dashboard-search-btn"
              style={{ fontSize: 40 }}
            />
          </div>
        </div>

        <div className="dashboard-search-results">
          {searchResults.map((track) => (
            <TrackList
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
        <div className="dashboard-player">
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>
      </div>
    </div>
  );
}
