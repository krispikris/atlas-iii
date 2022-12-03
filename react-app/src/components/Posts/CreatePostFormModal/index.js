import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import CreatePostForm from "./CreatePostForm";

const CreatePostFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        class="a2-navbar-right"
        id="a2a-navbar-right-upload-post-text-to-modal"
        onClick={() => setShowModal(true)}
      >
        Upload
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePostForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default CreatePostFormModal;
