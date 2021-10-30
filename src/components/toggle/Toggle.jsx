import React from "react";
import "./toggle.css";
import Sun from "../../image/sun.png";
import Moon from "../../image/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t" onClick={handleClick}>
      <img className="t-icon" src={Sun} alt="" />
      <img className="t-icon" src={Moon} alt="" />
      <div
        className="t-button"
        style={{ left: theme.state.darkMode ? 0 : 26 }}
      ></div>
    </div>
  );
};

export default Toggle;
