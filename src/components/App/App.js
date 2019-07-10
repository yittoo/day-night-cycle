import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./App.scss";

import CloudHandler from "../../containers/CloudsHandler/CloudHandler";
import SunMoonHandler from "../../containers/SunMoonHandler/SunMoonHandler";
import Mountains from "../Mountains/Mountains";
import Footer from "../Footer/Footer";

/**
 * Root of project, handles CSS variables depending on Redux state
 * and renders all other components and containers accordingly
 */
const App = () => {
  const [appClasses, setAppClasses] = useState(["App", "App--dawn"]);

  const timeState = useSelector(state => state.time);

  // Handles class names according to time state recieved from redux store
  // this class name changes variables declared in `App.scss` thus
  // changes entire style of webpage
  useEffect(() => {
    switch (timeState) {
      case "dawn":
        return setAppClasses(["App", "App--dawn"]);
      case "noon":
        return setAppClasses(["App", "App--noon"]);
      case "dusk":
        return setAppClasses(["App", "App--dusk"]);
      case "night":
        return setAppClasses(["App", "App--night"]);
      default:
        return;
    }
  }, [timeState]);

  return (
    <div className={appClasses.join(" ")}>
      <CloudHandler />
      <SunMoonHandler />
      <div className="Horizon" />
      <Mountains />
      <Footer />
    </div>
  );
};

export default App;
