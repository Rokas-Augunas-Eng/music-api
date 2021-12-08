import axios from "axios";
import React, { useState, useEffect } from "react";

import AlbumList from "../components/music/AlbumList";

export default function Albums() {
  const [loadedAlbums, setLoadedAlbums] = useState([]);

  useEffect(async () => {
    const result = await axios(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );

    setLoadedAlbums(result.data.feed.entry);
  }, []);

  return (
    <div>
      <AlbumList loadedAlbums={loadedAlbums} />
    </div>
  );
}
