import React from 'react';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>This modal is rendered outside the parent component's DOM hierarchy.</p>
      </div>
    </div>
  );
};

export default Modal;
