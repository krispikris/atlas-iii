import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import DeletePostForm from "./DeletePostForm";

const DeletePostFormModal = ({ postToUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("+++++++++", postToUpdate);

  return (
    <>
      <img
        className="delete-post-button-in-modal"
        onClick={() => setShowModal(true)}
        id="post-img-3"
        src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670170044/atlas/Icons/delete_l7uttv.png"
        alt="post-left-3"
      ></img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeletePostForm
            setShowModal={setShowModal}
            postToUpdate={postToUpdate}
          />
        </Modal>
      )}
    </>
  );
};

export default DeletePostFormModal;
