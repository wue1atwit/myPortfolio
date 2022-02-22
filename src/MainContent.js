import React, { useState } from "react";
import EmailBar from "./emailComp/EmailBar";
import IconBar from "./IconBar";
import MessageBar from "./msgComp/MessageBar";
import { FaPlusCircle } from "react-icons/fa";
import data from "./res/emailData";

const MainContent = ({ openModal }) => {
  const [msg, setMsg] = useState(0);
  const [showEmailBar, setShowEmailBar] = useState(true);

  const selectMsg = (id) => {
    setMsg(id);
  };

  const toggleEmailBar = () => {
    setShowEmailBar(!showEmailBar);
  };

  return (
    <main className="overlay">
      <IconBar toggleEmailBar={toggleEmailBar} />
      <div className="mid_overlay">
        <EmailBar
          selectMsg={selectMsg}
          showEmailBar={showEmailBar}
          toggleEmailBar={toggleEmailBar}
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
