import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }
  function onClose() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Popup</button>
      {showModal && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
