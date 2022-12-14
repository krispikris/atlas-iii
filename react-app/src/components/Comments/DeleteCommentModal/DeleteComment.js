// frontend/src/components/DeletecommentModal/DeletecommentForm.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCommentThunk } from "../../../store/comment";
import "./DeleteCommentModal.css";

const DeleteCommentForm = ({ setShowModal, commentToUpdate }) => {
  const dispatch = useDispatch();

  // console.log('======', commentToUpdate);

  const deleteComment = async (e) => {
    e.preventDefault();

    await dispatch(deleteCommentThunk(commentToUpdate.id));
    setShowModal(false);
  };

  return (
    <>
      <div class="delete-comment-form-container">
        <form className="delete-comment-form" onSubmit={deleteComment}>
          <label id="delete-comment-title">Delete Your Comment</label>
          <h3 id="delete-confirmation">
            Are you sure you want to delete your comment?
          </h3>
          <button id="delete-comment-submit" type="submit">
            Delete Your Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default DeleteCommentForm;
