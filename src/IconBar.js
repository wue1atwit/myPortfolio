import React from "react";
import {
  FaInbox,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaCog,
} from "react-icons/fa";

const IconBar = ({ toggleEmailBar }) => {
  return (
    <div className="social_bar" onClick={() => toggleEmailBar()}>
      <FaInbox className="icons" />
      <a href="https://www.instagram.com/ethanwu13/">
        <FaInstagram className="icons" />
      </a>
      <a href="https://github.com/wue1atwit">
        <FaGithub className="icons" />
      </a>
      <a href="https://www.linkedin.com/in/ethanwu13/">
        <FaLinkedin className="icons" />
      </a>
      <FaCog className="icons" />
    </div>
  );
};

export default IconBar;
