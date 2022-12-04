// frontend/src/components/UpdateSpotForm/index.js
import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import UpdatePostForm from "./UpdatePostForm";

const UpdatePostFormModal = ({ postToUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img
        className="update-post-button-in-modal"
        onClick={() => setShowModal(true)}
        id="post-img-"
        src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670170044/atlas/Icons/editing_pyrt35.png"
        alt="post-left-3"
      ></img>
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
