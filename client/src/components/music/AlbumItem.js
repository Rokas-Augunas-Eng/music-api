import React, { useState } from "react";
import Heart from "react-heart";

import Modal from "../shared/Modal";
import "./AlbumItem.css";

export default function AlbumItem(props) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  // To open modal
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="album-item-main">
        <div className="album-item-index">{props.index}</div>
        <li className="album-item-wrapper">
          <div className="album-item-container">
            <div className="album-item-image">
              <img src={props.image} alt="" />
            </div>
            <div className="album-item-text-container">
              <div className="album-item-album-name">{props.albumName}</div>
              <div className="album-item-artist">{props.artist}</div>
            </div>
            <div className="album-item-heart-preview-container">
              <div className="album-item-heart">
                <Heart isActive={active} onClick={() => setActive(!active)} />
              </div>
              <button
                onClick={openModal}
                className=""
                type="button"
                className="album-item-btn"
              >
                Preview
              </button>
            </div>
          </div>
        </li>
        {showModal && <Modal setShowModal={setShowModal} props={props} />}
      </div>
    </div>
  );
}
