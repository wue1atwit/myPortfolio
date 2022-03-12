import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Message from "./Message";
import EBarContext from "../EBarContext";

const MessageBar = ({ data }) => {
  const { showEmailBar } = useContext(EBarContext);
  const { id } = useParams();

  return (
    <section
      className={
        showEmailBar
          ? "message_overlay message_overlay_hide"
          : "message_overlay"
      }
    >
      <article className="message">
        <Message {...data[id]} />
      </article>
    </section>
  );
};

export default MessageBar;
