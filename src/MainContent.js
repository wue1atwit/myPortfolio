import React, { useState, useEffect } from "react";
import EmailBar from "./emailComp/EmailBar";
import IconBar from "./IconBar";
import MessageBar from "./msgComp/MessageBar";
import { FaPlusCircle } from "react-icons/fa";
import data from "./res/emailData";

const MainContent = ({ openModal }) => {
  const [msg, setMsg] = useState(0);
  const [showEmailBar, setShowEmailBar] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const selectMsg = (id) => {
    setMsg(id);
  };

  const toggleEmailBar = () => {
    setShowEmailBar(!showEmailBar);
  };

  /*
   * Fix the email bar from hiding when window width
   * is bigger than 1023px
   */
  const checkSize = (size) => {
    setWindowSize(window.innerWidth);
  };

  const eToggleEBar = () => {
    if (windowSize < 1024) {
      setShowEmailBar(!showEmailBar);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <main className="overlay">
      <IconBar toggleEmailBar={toggleEmailBar} />
      <div className="mid_overlay">
        <EmailBar
          selectMsg={selectMsg}
          showEmailBar={showEmailBar}
          toggleEmailBar={toggleEmailBar}
          eToggleEBar={eToggleEBar}
        />
        <MessageBar {...data[msg]} />
        <FaPlusCircle
          className={showEmailBar ? "contact_me contact_me_hide" : "contact_me"}
          onClick={() => openModal()}
        />
      </div>
    </main>
  );
};

export default MainContent;