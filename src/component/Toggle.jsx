import React from "react";
import { MDBIcon } from "mdbreact";

const Toggle = ({ darkMode, setDarkMode }) => (
  <div className="dark-mode-toggle">
    {
      darkMode ?
      <button className="white-text" type="button" onClick={() => setDarkMode(false)}>
        <MDBIcon far icon="moon" />
      </button> :
      <button className="white-text" type="button" onClick={() => setDarkMode(true)}>
        <MDBIcon far icon="lightbulb" />
      </button>
    }
  </div>
);
export default Toggle;