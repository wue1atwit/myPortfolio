import React, { useContext, useState } from "react";
import EmailTab from "./EmailTab";
import SearchBar from "./SearchBar";
import data from "../res/emailData";
import EBarContext from "../EBarContext";
import { Link } from "react-router-dom";

const EmailBar = ({ selectMsg }) => {
  const { showEmailBar } = useContext(EBarContext);
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
                  <Link to={`email/${email.id}`} key={email.id}>
                    <EmailTab {...email} selectMsg={selectMsg} />
                  </Link>
                );
              })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmailBar;
