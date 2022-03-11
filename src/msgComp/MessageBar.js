import React from "react";
import Message from "./Message";

const MessageBar = (props) => {
  return (
    <section
      className={
        props.showEmailBar
          ? "message_overlay message_overlay_hide"
          : "message_overlay"
      }
    >
      <article className="message">
        <Message {...props} />
      </article>
    </section>
  );
};

export default MessageBar;
