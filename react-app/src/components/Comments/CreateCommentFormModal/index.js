import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import CreateCommentForm from "./CreateCommentForm";

const CreateCommentFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="create-comment-button-in-modal"
        onClick={() => setShowModal(true)}
      >
        Post Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCommentForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default CreateCommentFormModal;
