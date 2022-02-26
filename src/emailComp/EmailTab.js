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
  eToggleEBar,
}) => {
  return (
    <article
      className="esection"
      onClick={() => {
        selectMsg(id);
        eToggleEBar();
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
      <p className="preview">{message}</p>
    </article>
  );
};

export default EmailTab;
