import React from "react";

const Message = ({ id, from, sDate, time, subject, message }) => {
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
      <div className="msg_body">
        <p>{message}</p>
      </div>
    </>
  );
};

export default Message;
