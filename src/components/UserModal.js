import React, { useState } from "react";
import "./UserModal.scss";
import { Container, ModalCard } from "./index.js";
import {
  FaTimes,
  FaGraduationCap,
  FaMapPin,
  FaLinkedinIn,
  FaGithub,
  FaClipboardCheck,
} from "react-icons/fa";

const CopyToast = ({ showToast }) => {
  return (
    <div
      className={showToast ? "toast-container show" : "toast-container hide"}
    >
      <div className="icon-overlay">
        <FaClipboardCheck className="toast-icon" />
      </div>
      <span>Copied to clipboard</span>
    </div>
  );
};

const UserModal = () => {
  const [showToast, setShowToast] = useState(false);

  const popToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  return (
    <Container className="modal-overlay">
      <div className="modal-container">
        <div className="close-btn">
          <FaTimes className="icon"></FaTimes>
        </div>
        <div className="modal-header">
          <div className="placeholder-image">
            <p className="E">E</p>
          </div>
          <div className="info">
            <p style={{ fontSize: "24px" }}>Ethan Wu</p>
            <p style={{ fontSize: "16px" }}>wp@ethanwu.net</p>
          </div>
        </div>
        <span className="line"></span>
        <div className="modal-content">
          <div className="information-content">
            <p>Information</p>
            <section className="cards-container">
              <ModalCard
                cardIcon={
                  <FaGraduationCap
                    className="icon card-icon"
                    style={{ fontSize: "26.67px" }}
                  />
                }
                header="School"
                text="Wentworth Institute of Technology"
                type="copy"
                popToast={popToast}
              />
              <ModalCard
                cardIcon={<FaMapPin className="icon card-icon" />}
                header="Location"
                text="Boston, MA"
                type="copy"
                popToast={popToast}
              />
            </section>
          </div>

          <div className="socials-content">
            <p>Social Media</p>
            <section className="cards-container">
              <ModalCard
                cardIcon={<FaLinkedinIn className="icon card-icon" />}
                header="LinkedIn"
                text="ethanwu13"
                type="link"
                link="https://www.linkedin.com/in/ethanwu13"
              />

              <ModalCard
                cardIcon={<FaGithub className="icon card-icon" />}
                header="GitHub"
                text="wue1atwit"
                type="link"
                link="https://www.github.com/wue1atwit"
              />
            </section>
          </div>
        </div>
        <CopyToast showToast={showToast} />
      </div>
    </Container>
  );
};

export default UserModal;
