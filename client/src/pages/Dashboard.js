import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

import useAuth from "../components/useAuth";
import TrackList from "../components/TrackLIst";
import Player from "../components/Player";
import "./Dashboard.css";

const spotifyApi = new SpotifyWebApi({
  clientId: "9531b419420d41b68c547839eda55aa5",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
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

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div>
      <div className="dashboard-search-container">
        <input
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="dashboard-search"
        />
      </div>
      <div className="dashboard-search-results">
        {searchResults.map((track) => (
          <TrackList track={track} key={track.uri} chooseTrack={chooseTrack} />
        ))}
      </div>
      <div className="dashboard-player">
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
}
