import React, { useState } from "react";
import { v4 as uuid_v4 } from "uuid";

import AlbumItem from "./AlbumItem";
import "./AlbumList.css";

export default function AlbumList(props) {
  // console.log(props.loadedAlbums.map((album) => album.category));
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ul className="album-list">
      {props.loadedAlbums.map((album) => (
        <AlbumItem
          id={album.id}
          key={uuid_v4()}
          artist={album["im:artist"].label}
          albumName={album["im:name"].label}
          category={album.category.attributes.label}
          year={album["im:releaseDate"].label.slice(0, 4)}
          image={album["im:image"][2].label}
          songCount={album["im:itemCount"]}
        />
      ))}
    </ul>
  );
}
