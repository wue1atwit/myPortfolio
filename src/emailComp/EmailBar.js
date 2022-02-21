import React from "react";
import EmailTab from "./EmailTab";
import SearchBar from "./SearchBar";
import data from "../res/emailData";

const EmailBar = ({ selectMsg, showEmailBar, toggleEmailBar }) => {
  console.log(showEmailBar);
  return (
    <div className="email_bar_overlay">
      <div className={showEmailBar ? "email_overlay" : "hide"}>
        <SearchBar />
        <div className="email_bar">
          <section className="emails">
            {data.map((email) => {
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
