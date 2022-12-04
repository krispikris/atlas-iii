import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import UpdateCommentForm from "./UpdateCommentForm";

const UpdateCommentFormModal = ({ commentToUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img
        className="delete-comment-button-in-modal"
        onClick={() => setShowModal(true)}
        id="post-img-2"
        src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670170044/atlas/Icons/editing_pyrt35.png"
        alt="post-left"
      ></img>
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
