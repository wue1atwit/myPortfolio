import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import Modal from "./Modal";
import Error404 from "./Error404";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <MainContent openModal={openModal} />
              {showModal && <Modal openModal={openModal} />}
            </>
          }
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
