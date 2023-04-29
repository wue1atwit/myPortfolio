import React from "react";
import "./EmailListItem.scss";
import { FaPaperPlane, FaPaperclip } from "react-icons/fa";

const EmailListItem = ({ subject, message, date }) => {
  return (
    <div className="email-item">
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <div className="placeholder-image">
          <p className="E">E</p>
        </div>
        <div className="item-text-container">
          <p className="item-text">Ethan Wu</p>
          <p className="item-text">{subject}</p>
          <p className="item-text preview">{message}</p>
          <div
            style={{
              marginTop: "4px",
              display: "flex",
              gap: "8px",
              color: "white",
            }}
          >
            <a href="#">
              <FaPaperclip className="icon"></FaPaperclip>
            </a>
            <a href="#">
              <FaPaperPlane className="icon"></FaPaperPlane>
            </a>
          </div>
        </div>
      </div>
      <p className="item-text item-date">{date}</p>
    </div>
  );
};

export default EmailListItem;
