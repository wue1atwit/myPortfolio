import React, { useState } from "react";
import App from "./App";
import { EmailMessage, Compose } from "./components";
import { FaMailBulk } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutedApp = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App showModal={showModal} setShowModal={setShowModal} />}
        >
          <Route
            path=""
            element={
              <div className="no-mail-selected">
                <FaMailBulk className="icon"></FaMailBulk>
                <p>Select an item to reads</p>
              </div>
            }
          ></Route>
          <Route
            path="emails/:emailID"
            element={<EmailMessage setShowModal={setShowModal} />}
          ></Route>
          <Route path="compose" element={<Compose />} />
        </Route>
        <Route path="/*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default RoutedApp;
