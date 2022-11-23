import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignInForm from './components/sign-in-form';
import SignUpForm from './components/sign-up-form';

const LogInModal = ({ show, onHide, onSubmit }) => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleUnregistered = () => setHasAccount(false);

  return (
    <Modal show={show} onHide={onHide} backdrop="static">
      <Modal.Body>
        {hasAccount ? (
          <SignInForm onUnregistered={handleUnregistered} onSubmit={onSubmit} />
        ) : (
          <SignUpForm onSubmit={onSubmit} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LogInModal;
