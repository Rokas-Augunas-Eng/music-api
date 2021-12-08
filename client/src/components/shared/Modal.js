import React from "react";

import "./Modal.css";

export default function Modal({ setShowModal, props }) {
  // To close Modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="background" onClick={closeModal}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-image">
          <img src={props.image} alt="" />
        </div>
        <div className="button-container">
          <button className="modal-btn" onClick={closeModal} type="button">
            Cancel don't change
          </button>
        </div>
      </div>
    </div>
  );
}
