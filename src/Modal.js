import React from "react";

const Modal = ({ openModal }) => {
  return (
    <div className="modal_overlay">
      <div className="form_content">
        <form id="contact_form" action="">
          <div className="modal_x" onClick={() => openModal()}>
            X
          </div>
          <div className="input_overlay">
            <div>
              <label htmlFor="form_from">From:</label>
              <input
                id="form_from"
                type="email"
                placeholder="johndoe@email.com"
              />
            </div>
            <div>
              <label htmlFor="form_cc">CC:</label>
              <input
                id="form_cc"
                type="email"
                value="noreply@email.com"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="form_subject">Subject:</label>
              <input
                id="form_subject"
                type="text"
                placeholder="Add a subject"
              />
            </div>
            <div className="form_message_overlay">
              <textarea id="form_message" type="text" />
            </div>

            <div className="send_btn">
              <input id="form_btn" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
