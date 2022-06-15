import React from "react";
import "./style.scss";

export const CardSkeleton = () => {
  return (
    <div className="card_skeleton">
      <div className="image"></div>
      <p className="title"></p>
      <div className="footer">
        <p className="price"></p>
        <p className="button"></p>
      </div>
    </div>
  );
};
