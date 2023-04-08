import React, { useState } from "react";
import "./ModalCard.scss";
import { FaRegCopy, FaExternalLinkAlt } from "react-icons/fa";

const ModalCard = ({ cardIcon, header, text, type, link, popToast }) => {
  const clickAction = () => {
    if (type === "copy") {
      navigator.clipboard.writeText(text);
      popToast();
    } else if (type === "link" && link) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="card-container" onClick={() => clickAction()}>
      <section className="card-main">
        {cardIcon}
        <div className="text">
          <span className="card-header">{header}</span>
          <span className="card-info">{text}</span>
        </div>
      </section>
      {type === "copy" ? (
        <FaRegCopy className="hover-icon" />
      ) : (
        <FaExternalLinkAlt className="hover-icon" />
      )}
    </div>
  );
};

export default ModalCard;
