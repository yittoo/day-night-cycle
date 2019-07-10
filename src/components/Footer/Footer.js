import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>
        Built by{" "}
        <a
          href="https://sozerdesign.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          SozerDesign
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/yittoo/day-night-cycle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </p>
    </footer>
  );
};

export default Footer;
