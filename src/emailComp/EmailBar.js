import React, { useState } from "react";
import EmailTab from "./EmailTab";
import SearchBar from "./SearchBar";
import data from "../res/emailData";

const EmailBar = ({ selectMsg, showEmailBar, toggleEmailBar, eToggleEBar }) => {
  const [search, setSearch] = useState("");
  const getSearch = (term) => {
    setSearch(term);
  };
  return (
    <div className="email_bar_overlay">
      <div className={showEmailBar ? "email_overlay" : "email_hide"}>
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
                    eToggleEBar={eToggleEBar}
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
