import React from "react";
import { Link } from "react-router-dom";

export const Image = ({ title, smallImage, filePath }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <Link to={filePath}>
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />
        </Link>
      </div>
    </div>
  );
};
