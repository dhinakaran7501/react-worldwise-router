import React from "react";
import "./errorComponent.css";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="errorComponent">
      <h1>Page Not</h1>
      <h2>Found</h2>
      <p>The Page you were looking for could not be found.</p>
      <p>
        This searched page does not exist.
        <Link to="/">Click here to go HOMEPAGE 👉</Link>
      </p>
    </div>
  );
};

export default ErrorComponent;
