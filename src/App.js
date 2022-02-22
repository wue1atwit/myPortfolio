import React, { useState } from "react";
import MainContent from "./MainContent";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MainContent openModal={openModal} />
      {showModal && <Modal openModal={openModal} />}
    </>
  );
};

export default App;
