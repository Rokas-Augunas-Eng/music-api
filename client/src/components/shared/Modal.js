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
        <div className="modal-wrapper">
          <div className="modal-image">
            <img src={props.image} alt="" />
          </div>

          <div className="modal-image-text-container">
            <div className="modal-item-album-name">{props.albumName}</div>
            <div className="modal-item-artist">{props.artist}</div>
            <div className="modal-item-category-year-container">
              {props.category} · {props.year}
            </div>
            <div className="modal-item-song-count">
              Track count: {props.songCount}
            </div>
          </div>
        </div>
        <div className="modal-button-container">
          <button className="modal-btn" onClick={closeModal} type="button">
            X
          </button>
        </div>
      </div>
    </div>
  );
}
