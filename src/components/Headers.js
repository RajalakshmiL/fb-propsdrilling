import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Headers = ({ text, bgColor, textcolor }) => {
  const headerStyle = { backgroundColor: bgColor, color: textcolor };
  return (
    <header style={headerStyle}>
      <div>FeedBack UI</div>
      {/* <h2>{props.text}</h2> */}
      {/* <h2>{text}</h2> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/post/1/Raji">Post</NavLink>
    </header>
  );
};

Headers.defaultProps = {
  text: "default Props",
  bgColor: "rgba(0,0,0,0.4)",
  textcolor: "#ff6a95",
};

Headers.propTypes = {
  text: PropTypes.string,
};

export default Headers;
