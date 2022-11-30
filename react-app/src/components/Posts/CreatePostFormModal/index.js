import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import CreatePostForm from "./CreatePostForm";

const CreatePostFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="create-post-button-in-modal"
        onClick={() => setShowModal(true)}
      >
        Upload Post
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePostForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default CreatePostFormModal;
