// frontend/src/components/DeleteReviewModal/DeleteReviewForm.js
import React from "react";
import { useDispatch } from "react-redux";
import { deletePostThunk } from "../../../store/post";
import "./DeletePostForm.css";

const DeletePostForm = ({ setShowModal, postToUpdate }) => {
  const dispatch = useDispatch();

  // console.log('======', postToUpdate);

  const deletePost = async (e) => {
    e.preventDefault();

    await dispatch(deletePostThunk(postToUpdate.id));
    setShowModal(false);
  };

  return (
    <>
      <form className="delete-post-form" onSubmit={deletePost}>
        <label id="delete-post-title">DELETE YOUR Post</label>
        <h3 id="delete-post-confirmation">
          Are you sure you want to delete your post?
        </h3>
        <button id="delete-post-submit" type="submit">
          Delete Post
        </button>
      </form>
    </>
  );
};

export default DeletePostForm;
