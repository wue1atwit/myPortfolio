import React from "react";

const MessageBlock = ({ message }) => {
  const msgArray = message.split("\n");
  return (
    <>
      {msgArray.map((msg, index) => {
        return (
          <div key={index}>
            <p>{msg}</p>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default MessageBlock;
