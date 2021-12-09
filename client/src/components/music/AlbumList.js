import React, { useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import SearchIcon from "@mui/icons-material/Search";

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
      <div className="album-list-search-container">
        <div className="album-list-container">
          <h1 className="album-list-title">Top Albums</h1>
          <div className="search-box">
            <input
              className="search-text"
              type="text"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchIcon className="search-btn" style={{ fontSize: 40 }} />
          </div>
        </div>
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
    </div>
  );
}
