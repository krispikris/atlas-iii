import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPostThunk, getPostThunk } from "../../../store/post";
import "./CreatePostFormModal.css";

const CreatePostForm = ({ setShowModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [tips, setTips] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    //   if (!imageURL || !imageURL.match(/\/{2}.+?\.(jpg|png|gif|jpeg)/gm)) {
    //     errors.push("Please enter valid image url.");
    //   }

    if (!photo || photo.length < 5 || photo.length > 255) {
      errors.push(
        "Please enter valid photo. photo must be more than 5 and less than 255 characters."
      );
    }

    if (!title || title.length < 2 || title.length > 50) {
      errors.push(
        "Please enter valid title. Title must be more than 2 and less than 50 characters."
      );
    }

    if (!location || location.length < 1 || location.length > 50) {
      errors.push(
        "Please enter valid location. Location must be more than 1 and less than 50 characters."
      );
    }

    if (!description || description.length < 5 || description.length > 255) {
      errors.push(
        "Please enter valid description. Description must be more than 5 and less than 255 characters."
      );
    }

    if (!tips || tips.length < 5 || tips.length > 255) {
      errors.push(
        "Please enter valid tips. Tips must be more than 5 and less than 255 characters."
      );
    }

    setValidationErrors(errors);
  }, [photo, title, location, description, tips]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) return;
    const postFormInputs = {
      photo,
      title,
      location,
      description,
      tips,
    };

    const newPost = await dispatch(createPostThunk(postFormInputs));

    if (newPost) {
      await dispatch(getPostThunk(newPost.id));
      setShowModal(false);
      return history.push(`/posts/${newPost.id}`);
    }
  };

  return (
    <form className="create-new-post-form" onSubmit={handleSubmit}>
      <div className="errors-create-post-form">
        {validationErrors.length > 0 && (
          <ul className="create-post-errors">
            {validationErrors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>

      <label id="upload-post-form-title">UPLOAD POST</label>
      <label id="welcome-back-to-atlas">Welcome back to atlas!</label>

      <label id="post-input-title">Photo URL</label>
      <input
        id="post-form-inputs"
        type="text"
        name="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />

      {/* <label id="post-input-title">Upload Image URL</label>
            <input
              id="post-form-inputs"
              type="url"
              name="imageURL"
              value={imageURL}
              onChange={(e) => setimageURL(e.target.value)}
            /> */}

      <label id="post-input-title">Title</label>
      <input
        id="post-form-inputs"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label id="post-input-title">Location</label>
      <input
        id="post-form-inputs"
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label id="post-input-title">Description</label>
      <input
        id="post-form-inputs"
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label id="post-input-title">tips</label>
      <input
        id="post-form-inputs"
        type="text"
        name="tips"
        value={tips}
        onChange={(e) => setTips(e.target.value)}
      />

      <button className="post-submit-button" type="submit">
        Submit Post
      </button>
    </form>
  );
};

export default CreatePostForm;
