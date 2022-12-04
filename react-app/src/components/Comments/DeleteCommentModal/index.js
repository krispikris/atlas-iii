import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import DeleteCommentForm from "./DeleteComment";

const DeleteCommentFormModal = ({ commentToUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("+++++++++", commentToUpdate);

  return (
    <>
      <img
        className="delete-comment-button-in-modal"
        onClick={() => setShowModal(true)}
        id="post-img"
        src="https://res.cloudinary.com/duvgdb8rd/image/upload/v1670170044/atlas/Icons/delete_l7uttv.png"
        alt="post-left"
      ></img>

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
