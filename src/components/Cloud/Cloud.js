import React from "react";
import "./Cloud.scss"

/**
 * Returns a cloud object fully with css only
 * see Cloud.scss in same directory as this file
 */
const Cloud = () => {
  return (
    <div className="cloud">
      <div className="bottom_c" />
      <div className="right_c" />
      <div className="left_c" />
    </div>
  );
};

export default Cloud;
