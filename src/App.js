import React, { useState } from "react";
import "./App.scss";
import { FaSearch, FaPencilAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { EmailListItem, Container, UserModal } from "./components";
import data from "./res/emailData";

const App = ({ showModal, setShowModal }) => {
  let convertDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;

    return `${month}/${day}`;
  };
  return (
    <Container sy={{ backgroundColor: "#f5f5f5", position: "relative" }}>
      <UserModal showModal={showModal} setShowModal={setShowModal}></UserModal>
      <div className="email-container">
        <form className="search-container">
          <div style={{ position: "relative" }}>
            <input type="text" className="search" placeholder="Search" />
            <FaSearch className="search-icon"></FaSearch>
          </div>
        </form>

        {data.map((email) => (
          <NavLink
            key={email.id}
            className="nav-link"
            to={`/emails/${email.id}`}
          >
            <EmailListItem
              subject={email.subject}
              message={email.message}
              date={convertDate(email.date)}
              hasAttachment={email.hasAttachment}
            />
          </NavLink>
        ))}

        <NavLink to="compose">
          <button className="compose-btn">
            <FaPencilAlt></FaPencilAlt>
            <p style={{ fontWeight: 700 }}>Compose</p>
          </button>
        </NavLink>
      </div>
      <div className="dynamic-content">
        <Outlet />
      </div>
    </Container>
  );
};

export default App;
