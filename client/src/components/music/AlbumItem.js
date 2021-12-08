import React, { useState } from "react";

import Modal from "../shared/Modal";
import "./AlbumItem.css";

export default function AlbumItem(props) {
  const [showModal, setShowModal] = useState(false);

  // To open modal
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
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
          <button onClick={openModal} className="" type="button"></button>
        </div>
      </li>
      {showModal && <Modal setShowModal={setShowModal} props={props} />}
    </div>
  );
}
