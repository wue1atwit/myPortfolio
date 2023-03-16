import React, { useState } from "react";
import "./QuickReply.scss";

const QuickReply = () => {
  const [message, setMessage] = useState("");

  // TODO Revisit quick reply validation
  const sendMessage = () => {
    if (message.length > 50) {
      console.log(message);
    } else {
      console.log("Message too short");
    }
  };

  return (
    <div className="reply-container">
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <input
          type="text"
          name="quick-reply"
          placeholder="Quick reply"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <div className="quick-send-btn" onClick={() => sendMessage()}>
          <p>Send</p>
        </div>
      </form>
    </div>
  );
};

export default QuickReply;
