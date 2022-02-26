import React from "react";

const Modal = ({ openModal }) => {
  const submitForm = () => {
    const eSubject = document.getElementById("form_subject").value;
    const eMsg = document.getElementById("form_message").value;
    window.open(`mailto:wue13@outlook.com?subject=${eSubject}&body=${eMsg}`);
  };
  return (
    // https://medium.com/swlh/create-an-enquiry-form-in-react-and-send-email-using-nodejs-1c0cd590dce1
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
                required
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
                required
              />
            </div>
            <div className="form_message_overlay">
              <textarea id="form_message" type="text" required />
            </div>

            <div className="send_btn">
              <input
                id="form_btn"
                type="button"
                value={"Send"}
                onClick={() => submitForm()}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
