// frontend/src/components/CreateReviewModal/CreateReviewForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createCommentThunk } from '../../../store/comment';
import './CreateCommentFormModal.css';

const CreateCommentForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const currentUser = useSelector((state) => state.session.user);
  console.log('This is the current user as an OBJECT: ', currentUser);

  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!comment || comment.length < 1 || comment.length > 255) {
      errors.push(
        'Please leave a comment more than 1 and less than 255 characters.',
      );
    }

    setValidationErrors(errors);
  }, [comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validationErrors.length > 0) return;

    let commentInput = { comment };

    // console.log("THIS CREATED REVIEW : ", reviewInput);

    await dispatch(createCommentThunk(commentInput, postId, currentUser))
      .then(() => setShowModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <div class="comment-form-main-container">
        {errors.map((err, i) => {
          <div className="comment-errors" key={i}>
            {err}
          </div>;
        })}

        <div className="errors-create-comment-form">
          {isSubmitted && (
            <ul className="create-comment-errors">
              {validationErrors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          )}
        </div>

        <form className="create-comment-form" onSubmit={handleSubmit}>
          <label id="create-comment-title">Leave a Comment</label>

          <textarea
            id="create-comment-input"
            type="text"
            name="comment"
            value={comment}
            placeholder="Example: This post is a BANGER!"
            onChange={(e) => setComment(e.target.value)}
          />

          <button id="create-comment-submit" type="submit">
            Create Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateCommentForm;
