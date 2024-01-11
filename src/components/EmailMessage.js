import React, { useEffect, useState } from "react";
import "./EmailMessage.scss";
import axios from "axios";
import { Container, AttachmentItem, QuickReply } from "./index";
import { FaPaperclip } from "react-icons/fa";
import { useParams } from "react-router-dom";

const EmailMessage = ({ setShowModal }) => {
  const { emailID } = useParams();
  const [email, setEmail] = useState({});

  const getEmail = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/v1/emails/${emailID}`
    );
    setEmail(res.data.email);
  };

  useEffect(() => {
    getEmail();
  }, [emailID]);

  const msgArray = !email.message ? [] : email.message.split("\n");

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
                  <span>no-reply@ethanwu.net</span>
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
              <p style={{ marginRight: "8px" }}>
                {`${email.attachedFiles.length} ${
                  email.attachedFiles.length > 1 ? "attachments" : "attachment"
                }`}
                {/* 2 attachment <span>Save all</span> */}
              </p>
              <span className="line"></span>
            </div>

            <div className="item-list">
              {email.attachedFiles.map((a) => (
                <AttachmentItem
                  key={`${a.name}.${a.type}`}
                  name={a.name}
                  size={a.size}
                  type={a.type}
                  file={a.file}
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
