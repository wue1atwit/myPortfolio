import React from "react";
import "./EmailMessage.scss";
import { Container, AttachmentItem, QuickReply } from "./index";
import { FaPaperclip } from "react-icons/fa";
import { useParams } from "react-router-dom";

const EmailMessage = ({ messageDef, setShowModal }) => {
  const { emailID } = useParams();
  let temp = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const email = messageDef.filter((mail) => mail.id == emailID)[0];
  const msgArray = email.message.split("\n");

  const customStyle = {
    padding: "0 16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    flex: 2,
    overflowY: "scroll",
  };

  return (
    <Container sy={customStyle}>
      <div className="subject">{email.subject}</div>
      <div className="message-container">
        <div>
          <div className="message-header">
            <div
              className="placeholder-image"
              onClick={() => setShowModal(true)}
            >
              <p className="E">E</p>
            </div>
            <div className="sender">
              <p className="name">Ethan Wu</p>
              <p className="email">
                To:{" "}
                <a href="#">
                  <span>wp@ethanwu.net</span>
                </a>
              </p>
            </div>
          </div>
          <span className="line"></span>
        </div>

        <div className="message-body">
          <span>
            {msgArray.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </span>
        </div>
        {email.hasAttachment && (
          <div className="attachment-container">
            <div className="attachment-header">
              <FaPaperclip></FaPaperclip>
              <p>
                2 attachment <span>Save all</span>
              </p>
              <span className="line"></span>
            </div>

            <div className="item-list">
              {email.attachedFiles.map((a) => (
                <AttachmentItem
                  name={a.name}
                  size={80}
                  type={a.type}
                  key={`${a.name}.${a.type}`}
                ></AttachmentItem>
              ))}
            </div>
          </div>
        )}
      </div>
      <QuickReply></QuickReply>
    </Container>
  );
};

export default EmailMessage;
