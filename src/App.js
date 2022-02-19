import React, { useState } from "react";
import EmailBar from "./emailComp/EmailBar";
import IconBar from "./IconBar";
import MessageBar from "./msgComp/MessageBar";
import { FaPlusCircle } from "react-icons/fa";
import data from "./res/emailData";

const App = () => {
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
    <div className="overlay">
      <IconBar toggleEmailBar={toggleEmailBar} />
      <EmailBar selectMsg={selectMsg} showEmailBar={showEmailBar} />
      <MessageBar {...data[msg]} />
      <FaPlusCircle id="contact_me" onClick={() => composeMail()} />
    </div>
  );
};

export default App;
