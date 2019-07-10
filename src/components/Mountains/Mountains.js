import React from "react";

import "./Mountains.scss";

/**
 * Returns mountain and mountain overlay
 * Overlay acts on entire page so moon/sun z-index has to
 * be larger than overlay because we do not want overlay
 * styling affect them and thus the mountain appears in front
 * of sun/moon should they collide, I couldn't think of
 * any other way to do this while keeping a solid overlay
 * over the mountain feel free to give it a shot yourself
 */
const Mountains = () => {
  return (
    <React.Fragment>
      <div className="Mountains--overlay" />
      <div className="Mountains--image" />
    </React.Fragment>
  );
};

export default Mountains;
