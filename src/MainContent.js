import React, { useState } from "react";
import EmailBar from "./emailComp/EmailBar";
import IconBar from "./IconBar";
import MessageBar from "./msgComp/MessageBar";
import { FaPlusCircle } from "react-icons/fa";
import data from "./res/emailData";

const MainContent = () => {
  const [msg, setMsg] = useState(0);
  const [showEmailBar, setShowEmailBar] = useState(true);

  const selectMsg = (id) => {
    setMsg(id);
  };

  const toggleEmailBar = () => {
    setShowEmailBar(!showEmailBar);
  };

  const composeMail = () => {
    console.log("composed");
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
        <FaPlusCircle className="contact_me" onClick={() => composeMail()} />
      </div>
    </main>
  );
};

export default MainContent;
