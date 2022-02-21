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
    <nav className="social_bar">
      <FaInbox className="icons" onClick={() => toggleEmailBar()} />
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
    </nav>
  );
};

export default IconBar;
