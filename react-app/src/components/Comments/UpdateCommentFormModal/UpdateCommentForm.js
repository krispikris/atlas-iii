// frontend/src/components/UpdateCommentModal/UpdateCommentForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCommentThunk } from "../../../store/comment";
import "./UpdateCommentFormModal.css";

const UpdateCommentForm = ({ setShowModal, commentToUpdate }) => {
  // updateCommentForm takes in a prop
  // prop is being deconstructed

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const commentId = commentToUpdate.id;

  const [comment, setComment] = useState(commentToUpdate.comment);
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  // console.log('==================', commentToUpdate);
  // console.log('==================', commentId);
  // console.log('==================', commentToUpdate.comment);
  // console.log('==================', commentToUpdate.stars);

  useEffect(() => {
    const errors = [];

    if (!comment || comment.length < 1 || comment.length > 255) {
      errors.push(
        "Please leave a comment more than 1 and less than 255 characters."
      );
    }

    setValidationErrors(errors);
  }, [comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) return;

    let updatedCommentInput = { comment };

    await dispatch(updateCommentThunk(updatedCommentInput, commentId))
      .then(() => setShowModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <form className="update-comment-form" onSubmit={handleSubmit}>
      <div className="errors-create-comment-form">
        {validationErrors.length > 0 && (
          <ul className="create-comment-errors">
            {validationErrors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>

      <label id="update-comment-title">UPDATE YOUR Comment</label>

      <label id="update-comment-input-title">Updated Comment</label>
      <textarea
        id="update-comment-input-1"
        type="text"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button id="update-comment-submit" type="submit">
        Update Comment
      </button>
    </form>
  );
};

export default UpdateCommentForm;
