import React from "react";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div>
      <h3>Welcome to Countries APP!</h3>
      <Link to="/home">Start</Link>
    </div>
  );
}
