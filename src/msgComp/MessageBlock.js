import React from "react";

const MessageBlock = ({ message }) => {
  const msgArray = message.split("\n");
  return (
    <>
      {msgArray.map((msg) => {
        return <p>{msg}</p>;
      })}
    </>
  );
};

export default MessageBlock;
