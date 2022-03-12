import React, { useContext } from "react";
import { FaPaperclip } from "react-icons/fa";
import EBarContext from "../EBarContext";

const EmailTab = (props) => {
  const { id, from, date, subject, hasAttachment, message, selectMsg } = props;
  const { eToggleEBar } = useContext(EBarContext);
  return (
    <article
      className="esection"
      onClick={() => {
        selectMsg(id);
        eToggleEBar();
      }}
    >
      <div className="tab_header">
        <h1 className="froms">{from}</h1>
        <div className="th_icons">{hasAttachment && <FaPaperclip />}</div>
      </div>

      <div className="tab_subheader">
        <h4 className="subject">{subject}</h4>
        <p className="date">{date}</p>
      </div>
      <p className="preview">{message}</p>
    </article>
  );
};

export default EmailTab;
