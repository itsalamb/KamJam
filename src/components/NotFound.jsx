import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({title, description}) => {
  return (
    <div className="not-found">
      <h1>{title}</h1>
      <br />
      <h2>{description}</h2>
      <br />
      <iframe
        src="https://giphy.com/embed/sIHj7Sm43H30s"
        width="291"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/nice-kyle-sIHj7Sm43H30s"></a>
      </p>
      <Link className="head-home" to="/">
        Head back home
      </Link>
    </div>
  );
}

export default NotFound