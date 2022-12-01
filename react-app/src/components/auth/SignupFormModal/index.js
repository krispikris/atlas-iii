// frontend/src/components/SignupFormModal/index.js
import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import SignUpForm from "./SignUpForm";

const SignupFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  // console.log(`THIS IS SHOW MODAL: `, showModal);

  return (
    <>
      <button id="signup-button-in-modal" onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
};

export default SignupFormModal;
