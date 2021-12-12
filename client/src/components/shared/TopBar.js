import React from "react";
import { Link } from "react-router-dom";

import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <Link to={"/"} className="top-bar-link">
          Home
        </Link>

        <Link to={"/search"} className="top-bar-link">
          Search Tracks
        </Link>
      </div>
    </div>
  );
}
