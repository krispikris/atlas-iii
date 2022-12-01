import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import DeletePostForm from "./DeletePostForm";

const DeletePostFormModal = ({ postToUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("+++++++++", postToUpdate);

  return (
    <>
      <button
        className="delete-post-button-in-modal"
        onClick={() => setShowModal(true)}
      >
        Delete Post
      </button>
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
