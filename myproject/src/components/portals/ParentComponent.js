import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal'; // Assuming Modal component is created in a separate file

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Portal to render the Modal component */}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById('modal-root') // DOM node outside the parent's hierarchy
      )}
    </div>
  );
};

export default ParentComponent;
