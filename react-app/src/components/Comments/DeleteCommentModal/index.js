import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import DeleteCommentForm from "./DeleteComment";

const DeleteCommentFormModal = ({ commentToUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("+++++++++", commentToUpdate);

  return (
    <>
      <button
        className="delete-comment-button-in-modal"
        onClick={() => setShowModal(true)}
      >
        Delete Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentForm
            setShowModal={setShowModal}
            commentToUpdate={commentToUpdate}
          />
        </Modal>
      )}
    </>
  );
};

export default DeleteCommentFormModal;
