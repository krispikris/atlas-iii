import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import CreateCommentForm from "./CreateCommentForm";

const CreateCommentFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="create-comment-button-in-modal"
        onClick={() => setShowModal(true)}
      >
        +
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCommentForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default CreateCommentFormModal;
