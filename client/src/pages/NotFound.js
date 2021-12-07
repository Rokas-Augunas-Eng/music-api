import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Error 404 Page not found</h1>
        <Link to="/">Go Back </Link>
      </div>
    );
  }
}
export default NotFound;
