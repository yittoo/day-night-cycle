import React, { Component } from "react";
import "./CloudHandler.scss";

import Cloud from "../../components/Cloud/Cloud";

class CloudHandler extends Component {
  constructor(props) {
    super(props);
    // maximum cloud count = 5 because of css limitation
    // need to declare more styles in css for more clouds
    // see CloudHandler.scss in the same folder this file is located in
    // for more details
    const cloudCount = 5;
    let cloudData = {};
    // cloudData object declaration to be used by this component
    // to render clouds accordingly
    for (let i = 1; i <= cloudCount; i++) {
      cloudData[i] = {
        position: {
          // initial positioning in percentage of viewport
          top: Math.random * 2 + 2,
          left: Math.random() * 70
        },
        // represented by number percent per tick
        velocity: {
          // a axis velocity range 0.2% ~ 0.7% per tick
          xAxis: Math.random() / 30 + 0.001
          /**
           * Disabled y axis movement as it brings additional complexity
           * for mobile device compatibility but left the structure to
           * support it if necessary feel free to improve it yourself
           */
          // y axis velocity range -0.25% ~ 0.25% per tick
          // yAxis: Math.random() / 20 - 1 / 40
        },
        className: `CloudHandler CloudHandler--${i}`
      };
    }
    this.state = {
      cloudData,
      // cloud movement update interval in miliseconds default 40ms = 25framepersecond
      // reduce the update interval for higher performance
      updateInterval: 40
    };
  }

  componentDidMount() {
    this.movementLoop = setInterval(
      () => this.movementHandler(this.state.cloudData),
      this.state.updateInterval
    );
  }

  /**
   * Handles movements of each cloud accordingly and returns final result
   */
  movementHandler = cloudData => {
    let newCloudData = {};
    for (let cloudKey in cloudData) {
      const cloudOptions = { ...cloudData[cloudKey] };
      newCloudData[cloudKey] = {
        ...cloudData[cloudKey],
        position: this.moveAccordingToVelocity(
          cloudOptions.position,
          cloudOptions.velocity
        )
      };
    }
    this.setState({ ...this.state, cloudData: newCloudData });
  };

  /**
   * Handles positioning of given cloud using its' oldPosition and velocity
   */
  moveAccordingToVelocity = (oldPosition, velocity) => {
    const { top, left } = oldPosition;
    const { xAxis } = velocity;
    /**
     * You need to add yAxis checks here if you want to
     * implement movement in yAxis, do not forget to initialize
     * a velocity in state decleration in constructor method
     */
    // if it goes too far right, take it to far left offscreen
    const newLeft = left > 150 ? -50 : left + xAxis;
    return { top, left: newLeft };
  };

  /**
   * Generates renderable clouds from component state
   */
  generateClouds = currentCloudData => {
    return Object.keys(currentCloudData).map(cloudKey => {
      const cloudOptions = { ...currentCloudData[cloudKey] };
      const { top, left } = cloudOptions.position;
      return (
        <div
          className={cloudOptions.className}
          style={{ top: `${top}%`, left: `${left}%` }}
          key={cloudKey}
        >
          <Cloud />
        </div>
      );
    });
  };

  render() {
    const cloudsToRender = this.generateClouds(this.state.cloudData);
    return <React.Fragment>{cloudsToRender}</React.Fragment>;
  }
}

export default CloudHandler;
