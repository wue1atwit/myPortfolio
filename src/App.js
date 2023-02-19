import React from "react";
import "./App.scss";
import { FaSearch, FaPencilAlt } from "react-icons/fa";
import EmailListItem from "./components/EmailListItem";

const App = () => {
  return (
    <>
      <div className="email-container">
        <form className="search-container">
          <div style={{ position: "relative" }}>
            <input type="text" className="search" placeholder="Search" />
            <FaSearch className="search-icon"></FaSearch>
          </div>
        </form>
        <EmailListItem
          subject="[Subject]"
          preview="[Preview]"
          date="11/13"
        ></EmailListItem>
        <EmailListItem
          subject="[Subject]"
          preview="[Preview]"
          date="11/13"
        ></EmailListItem>
        <button className="compose-btn" onClick={() => console.log("Compose")}>
          <FaPencilAlt></FaPencilAlt>
          <p style={{ fontWeight: 700 }}>Compose</p>
        </button>
      </div>
    </>
  );
};

export default App;
