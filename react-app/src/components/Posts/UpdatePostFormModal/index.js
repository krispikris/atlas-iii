// frontend/src/components/UpdateSpotForm/index.js
import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import UpdatePostForm from "./UpdatePostForm";

const UpdatePostFormModal = ({ postToUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="update-post-button-in-modal"
        onClick={() => setShowModal(true)}
      >
        Update Post
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdatePostForm
            setShowModal={setShowModal}
            spotToUpdate={postToUpdate}
          />
        </Modal>
      )}
    </>
  );
};

export default UpdatePostFormModal;
