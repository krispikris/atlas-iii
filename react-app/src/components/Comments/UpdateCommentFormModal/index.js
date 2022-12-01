import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import UpdateCommentForm from "./UpdateCommentForm";

const UpdateCommentFormModal = ({ commentToUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="update-comment-button-in-modal"
        onClick={() => setShowModal(true)}
      >
        Update Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateCommentForm
            setShowModal={setShowModal}
            commentToUpdate={commentToUpdate}
          />
          {/* updatecommentForm is a component that is being passed two props (setShowModal and commentToUpdate)*/}
        </Modal>
      )}
    </>
  );
};

export default UpdateCommentFormModal;
