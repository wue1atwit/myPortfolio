import React from "react";
import { FaPaperclip } from "react-icons/fa";

const EmailTab = ({
  id,
  from,
  date,
  subject,
  hasAttachment,
  greeting,
  message,
  selectMsg,
  toggleEmailBar,
}) => {
  return (
    <article
      className="esection"
      onClick={() => {
        selectMsg(id);
        toggleEmailBar();
      }}
    >
      <div className="tab_header">
        <p className="froms">{from}</p>
        <div className="th_icons">{hasAttachment && <FaPaperclip />}</div>
      </div>

      <div className="tab_subheader">
        <p className="subject">{subject}</p>
        <p className="date">{date}</p>
      </div>
      <p className="preview">{`${greeting} ${message.substring(0, 100)}...`}</p>
    </article>
  );
};

export default EmailTab;
