import React, { useState } from "react";
import EmailTab from "./EmailTab";
import SearchBar from "./SearchBar";
import data from "../res/emailData";

const EmailBar = ({ selectMsg, showEmailBar, toggleEmailBar }) => {
  const [search, setSearch] = useState("");
  const getSearch = (term) => {
    setSearch(term);
  };
  return (
    <div className="email_bar_overlay">
      <div className={showEmailBar ? "email_overlay" : "hide"}>
        <SearchBar getSearch={getSearch} />
        <div className="email_bar">
          <section className="emails">
            {data
              .filter((email) => {
                if (search === "") {
                  return email;
                } else if (
                  email.subject.toLowerCase().includes(search.toLowerCase())
                ) {
                  return email;
                }
                return null;
              })
              .map((email) => {
                return (
                  <EmailTab
                    key={email.id}
                    {...email}
                    selectMsg={selectMsg}
                    toggleEmailBar={toggleEmailBar}
                  />
                );
              })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmailBar;
