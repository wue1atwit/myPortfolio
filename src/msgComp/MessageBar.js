import React, { useContext } from "react";
import Message from "./Message";
import EBarContext from "../EBarContext";

const MessageBar = (props) => {
  const { showEmailBar } = useContext(EBarContext);
  return (
    <section
      className={
        showEmailBar
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
