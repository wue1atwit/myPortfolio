import React from "react";
import EmailTab from "./EmailTab";
import SearchBar from "./SearchBar";
import data from "../res/emailData";

const EmailBar = ({ selectMsg, showEmailBar }) => {
  console.log(showEmailBar);
  return (
    <div className={showEmailBar ? "email_overlay" : "email_hide"}>
      <SearchBar />
      <div className="email_bar">
        <article className="emails">
          {data.map((email) => {
            return <EmailTab key={email.id} {...email} selectMsg={selectMsg} />;
          })}
        </article>
      </div>
    </div>
  );
};

export default EmailBar;
