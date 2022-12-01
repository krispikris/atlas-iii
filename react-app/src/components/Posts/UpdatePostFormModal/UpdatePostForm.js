// frontend/src/components/UpdateSpotModal/UpdateSpotForm.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePostThunk } from "../../../store/post";
import "./UpdatePostFormModal.css";

const UpdatePostForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const post = useSelector((state) => state.posts[parseInt(postId)]);

  const [photo, setPhoto] = useState(post.photo);
  const [title, setTitle] = useState(post.title);
  const [location, setLocation] = useState(post.location);
  const [description, setDescription] = useState(post.description);
  const [tips, setTips] = useState(post.tips);
  // const [imageURL, setimageURL]           = useState(spot.imageURL);

  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!photo || photo.length < 5 || photo.length > 255) {
      errors.push(
        "Please enter valid photo. Photo URL must be more than 5 and less than 255 characters."
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

    // if (!imageURL || !imageURL.match(/\/{2}.+?\.(jpg|png|gif|jpeg)/gm)) {
    //     errors.push('Please enter valid image url.');
    // }
    setValidationErrors(errors);
  }, [photo, title, location, description, tips]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) return;

    let updatedPostFormInputs = {
      photo,
      title,
      location,
      description,
      tips,
    };

    await dispatch(updatePostThunk(updatedPostFormInputs, postId));
    setShowModal(false);
  };

  return (
    <form className="update-post-form" onSubmit={handleSubmit}>
      <div className="errors-update-post-form">
        {validationErrors.length > 0 && (
          <ul className="update-post-errors">
            {validationErrors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>

      <label id="update-post-title">UPDATE YOUR POST</label>

      <label id="update-post-input-title">Photo URL</label>
      <input
        id="update-post-input"
        type="text"
        name="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />

      <label id="update-post-input-title">Title</label>
      <input
        id="update-post-input"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label id="update-post-input-title">Location</label>
      <input
        id="update-post-input"
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label id="update-post-input-title">Description</label>
      <input
        id="update-post-input"
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label id="update-post-input-title">Tips</label>
      <input
        id="update-post-input"
        type="text"
        name="tips"
        value={tips}
        onChange={(e) => setTips(e.target.value)}
      />

      <button id="update-post-submit" type="submit">
        Update Post
      </button>
    </form>
  );
};

export default UpdatePostForm;
