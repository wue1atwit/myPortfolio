import React from "react";
import MessageBlock from "./MessageBlock";

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
  return (
    <>
      <div className="msg_header">
        <div className="pfp"></div>
        <div className="msg_info">
          <p className="name">{from}</p>
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
          <a href={attachedFiles} download>
            Download
          </a>
        </div>
      )}
      <div className="msg_body">
        <MessageBlock message={message} />
      </div>
    </>
  );
};

export default Message;
