import React from "react";
import "./Tinker.scss";
import { FaCog } from "react-icons/fa";

const Tinker = () => {
  return (
    <div className="tinker-container">
      <FaCog className="cog" />
      <span className="head">Maintanence</span>
      <span className="body">
        My portfolio is only available for screen widths 1056px or greater.
      </span>
    </div>
  );
};

export default Tinker;
