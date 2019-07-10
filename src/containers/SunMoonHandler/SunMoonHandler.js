import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeTime } from "../../store/actions";

import "./SunMoonHandler.scss";
import Sun from "../../components/Sun/Sun";
import Moon from "../../components/Moon/Moon";

/**
 * Handles positioning of `Sun` and `Moon`
 * places them in a bigger than viewport object's corners
 * in a way they line up on it diagonally
 * over time rotates the object accordingly with javascript
 * and applies it as inline style with transform: rotate
 */
const SunMoonHandler = () => {
  // current angle starts from 360 and decreases till 0 then resets back
  const [angle, setAngle] = useState(360);
  // style state, used by rotateFunc, keeps inline-style property for component
  const [style, setStyle] = useState({});

  let currentTimeout;
  const timeState = useSelector(state => state.time);
  const dispatch = useDispatch();

  /**
   * Responsible for initializing the rotate on componentDidMount
   * and clearing it on componentWillUnmount
   */
  useEffect(() => {
    rotateFunc(50, angle);
    return () => {
      if (currentTimeout) clearTimeout(currentTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handlePeriod(timeState, angle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [angle]);

  /**
   * Sets the current period of day according to angle of sun/moon
   * @param {String} currentTimeState current time state obtained from redux
   * @param {Number} currentAngle current angle of rotation obtained from local state
   */
  const handlePeriod = (currentTimeState, currentAngle) => {
    if (currentTimeState !== "dawn" && currentAngle < 40) {
      dispatch(changeTime("dawn"));
    } else if (
      currentTimeState !== "noon" &&
      270 < currentAngle &&
      currentAngle < 340
    ) {
      dispatch(changeTime("noon"));
    } else if (
      currentTimeState !== "dusk" &&
      200 < currentAngle &&
      currentAngle < 270
    ) {
      dispatch(changeTime("dusk"));
    } else if (
      currentTimeState !== "night" &&
      40 < currentAngle &&
      currentAngle < 200
    ) {
      dispatch(changeTime("night"));
    }
  };

  /**
   * Handles styling and newAngle calculations
   * @param {Integer} delay milisecond delay for function to fire again
   * @param {Number} currentAngle current angle of component
   */
  const rotateFunc = (delay, currentAngle) => {
    const newAngle = currentAngle <= 0 ? 360 : currentAngle - 0.2;
    setAngle(newAngle);
    setStyle({ transform: `rotate(${newAngle}deg)` });
    currentTimeout = setTimeout(() => rotateFunc(delay, newAngle), delay);
  };

  return (
    <div className="SunMoonHandler" style={style}>
      <Moon />
      <Sun />
    </div>
  );
};

export default SunMoonHandler;
