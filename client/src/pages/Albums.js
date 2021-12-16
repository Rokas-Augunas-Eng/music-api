import axios from "axios";
import React, { useState, useEffect } from "react";

import AlbumList from "../components/music/AlbumList";
import Topbar from "../components/shared/TopBar";

export default function Albums() {
  const [loadedAlbums, setLoadedAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );

      setLoadedAlbums(result.data.feed.entry);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Topbar />
      <AlbumList loadedAlbums={loadedAlbums} />
    </div>
  );
}
