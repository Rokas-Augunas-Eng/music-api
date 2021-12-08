import React from "react";
import { Link } from "react-router-dom";

export default function TopBar({ code }) {
  console.log(code);
  return (
    <div>
      <Link to={"/dashboard"}>click</Link>
    </div>
  );
}
