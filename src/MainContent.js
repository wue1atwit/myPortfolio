import React, { useState, useEffect } from "react";
import EmailBar from "./emailComp/EmailBar";
import IconBar from "./IconBar";
import MessageBar from "./msgComp/MessageBar";
import { FaPlusCircle } from "react-icons/fa";
import { GiAsianLantern } from "react-icons/gi";
import data from "./res/emailData";
import EBarContext from "./EBarContext";
import { Routes, Route } from "react-router-dom";

const MainContent = ({ openModal }) => {
  const [showEmailBar, setShowEmailBar] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const toggleEmailBar = () => {
    setShowEmailBar(!showEmailBar);
  };

  /*
   * Fix the email bar from hiding when window width
   * is bigger than 1023px
   */
  const checkSize = (size) => {
    setWindowSize(window.innerWidth);
  };

  const eToggleEBar = () => {
    if (windowSize < 1024) {
      setShowEmailBar(!showEmailBar);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <EBarContext.Provider value={{ showEmailBar, toggleEmailBar, eToggleEBar }}>
      <main className="overlay">
        <div className="mid_overlay">
          <EmailBar />
          <Routes>
            <Route
              path="/*"
              element={
                <div className="no_email">
                  <GiAsianLantern className="lantern" />
                  <h4 className="lantern_text">Select an item to read</h4>
                </div>
              }
            ></Route>
            <Route
              path="email/:id"
              element={<MessageBar data={data} />}
            ></Route>
          </Routes>
          <FaPlusCircle
            className={
              showEmailBar ? "contact_me contact_me_hide" : "contact_me"
            }
            onClick={() => openModal()}
          />
        </div>
      </main>
    </EBarContext.Provider>
  );
};

export default MainContent;
