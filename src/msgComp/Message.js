import React, { useContext } from "react";
import MessageBlock from "./MessageBlock";
import File from "./File";
import EBarContext from "../EBarContext";

const Message = ({
  id,
  from,
  sDate,
  time,
  subject,
  message,
  attachedFiles,
  hasAttachment,
}) => {
  const { showEmailBar } = useContext(EBarContext);
  return (
    <>
      <div className="msg_header">
        <div className="pfp"></div>
        <div className="msg_info">
          <h1 className="name">{from}</h1>
          <p className="more">To: You</p>
          <p className="more">Subject: {subject}</p>
        </div>
        <div className="msg_date">
          <p>{sDate}</p>
          <p>{time}</p>
        </div>
      </div>
      {hasAttachment && (
        <div className="attachments_bar">
          {attachedFiles.map((file, index) => {
            return (
              <File key={index} file={file} showEmailBar={showEmailBar}></File>
            );
          })}
        </div>
      )}
      <div className="msg_body">
        <MessageBlock message={message} />
      </div>
    </>
  );
};

export default Message;
