import React, { useState } from "react";
import "./Compose.scss";
import { Container } from "./index";
import { FaTimes, FaRegPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Compose = () => {
  const [composeMessage, setComposeMessage] = useState({});
  const [validatorStyle, setValidatorStyle] = useState({});
  const navigate = useNavigate();

  const customStyle = {
    padding: "0 16px",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    overflowY: "scroll",
  };

  const messageValidator = (message) => {
    if (
      !message.fullName ||
      !message.email ||
      !message.subject ||
      !message.message
    ) {
      setValidatorStyle({ border: "1px solid #f17d79" });
      return "all_fields_required";
    }

    if (
      !message.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return "invalid_email";
    }

    if (message.message.length < 50) {
      return "invalid_message_length";
    }

    setValidatorStyle({});
    return "valid_message";
  };

  const sendAction = () => {
    if (messageValidator(composeMessage) !== "valid_message") {
      console.log(messageValidator(composeMessage));
    } else {
      console.log(composeMessage);
    }
  };

  return (
    <Container sy={customStyle}>
      <div className="compose-container" style={validatorStyle}>
        <form className="compose-form">
          <input
            type="text"
            placeholder="Full Name"
            style={{ borderRadius: "5px 5px 0 0" }}
            onChange={(e) =>
              setComposeMessage({ ...composeMessage, fullName: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setComposeMessage({ ...composeMessage, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) =>
              setComposeMessage({ ...composeMessage, subject: e.target.value })
            }
          />
          <textarea
            onChange={(e) =>
              setComposeMessage({ ...composeMessage, message: e.target.value })
            }
          ></textarea>
          {/* <input type="submit" value="Submit" /> */}
          <div className="compose-footer">
            <div className="close-btn" onClick={() => navigate(-1)}>
              <FaTimes className="icon"></FaTimes>
            </div>
            <div type="submit" className="send-btn" onClick={sendAction}>
              <FaRegPaperPlane></FaRegPaperPlane>
              <span>Send</span>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Compose;
