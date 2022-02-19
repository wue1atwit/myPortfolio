import React from "react";

const EmailTab = ({ id, from, date, subject, message, selectMsg }) => {
  return (
    <article className="esection" onClick={() => selectMsg(id)}>
      <h2 className="froms">{from}</h2>
      <div className="rItems">
        <p className="date">{date}</p>
      </div>
      <p className="subject">{subject}</p>
      <p className="preview">{message.substring(0, 100)}</p>
    </article>
  );
};

export default EmailTab;
