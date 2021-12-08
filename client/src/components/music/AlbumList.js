import React, { useState } from "react";
import { v4 as uuid_v4 } from "uuid";

import AlbumItem from "./AlbumItem";
import "./AlbumList.css";

export default function AlbumList({ loadedAlbums, code }) {
  const [query, setQuery] = useState("");

  const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter(
      (item) =>
        item["im:artist"].label.toLowerCase().includes(query.toLowerCase()) ||
        item["im:name"].label.toLowerCase().includes(query.toLowerCase()) ||
        item["im:releaseDate"].label.slice(0, 4).includes(query)
    );
  };

  const filteredItems = getFilteredItems(query, loadedAlbums);

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul className="album-list">
        {filteredItems.map((album, index) => (
          <AlbumItem
            index={index + 1}
            id={album.id}
            key={uuid_v4()}
            artist={album["im:artist"].label}
            albumName={album["im:name"].label}
            category={album.category.attributes.label}
            year={album["im:releaseDate"].label.slice(0, 4)}
            image={album["im:image"][2].label}
            songCount={album["im:itemCount"].label}
            code={code}
          />
        ))}
      </ul>
    </div>
  );
}
