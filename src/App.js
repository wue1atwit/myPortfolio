import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import { FaSearch, FaPencilAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { EmailListItem, Container, UserModal } from "./components";
import moment from "moment";

const App = ({ showModal, setShowModal }) => {
  const [data, setData] = useState([]);

  /**
   * @Deprecated - Date conversion will be tasked
   * to Moment.js module
   */
  let convertDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;

    return `${month}/${day}`;
  };

  const getEmails = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/v1/emails`
    );
    setData(
      res.data.emails.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    );
  };

  useEffect(() => {
    getEmails();
  }, []);

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
            key={email._id}
            className="nav-link"
            to={`/emails/${email._id}`}
          >
            <EmailListItem
              subject={email.subject}
              message={email.message}
              date={moment(email.date).format("h:mm A")}
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
