import React, { useContext } from "react";
import EBarContext from "./EBarContext";
import {
  FaInbox,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  // FaCog,
} from "react-icons/fa";

const IconBar = () => {
  const { toggleEmailBar } = useContext(EBarContext);
  return (
    <nav className="social_bar">
      <FaInbox className="icons" onClick={() => toggleEmailBar()} />
      <a
        href="https://github.com/wue1atwit"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FaGithub className="icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/ethanwu13/"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FaLinkedin className="icons" />
      </a>
      <a
        href="https://www.instagram.com/ethanwu13/"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FaInstagram className="icons" />
      </a>
      {/* <FaCog className="icons" /> */}
    </nav>
  );
};

export default IconBar;
