import React from "react";
import Message from "./Message";

const MessageBar = (props) => {
  return (
    <section className="message_overlay">
      <article className="message">
        <Message {...props} />
      </article>
    </section>
  );
};

export default MessageBar;
