import React from "react";

import "./Login.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=9531b419420d41b68c547839eda55aa5&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <div className="login-container">
      <a className="spotify-btn" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  );
}
