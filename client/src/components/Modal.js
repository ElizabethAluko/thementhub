// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalClassName = `fixed top-0 left-0 w-full h-full inset-0 z-50 flex items-center justify-center transform scale-0 transition-transform duration-600 ${
    isOpen ? 'scale-100' : ''
  } zoom-in`; // Apply the custom animation class

  const backdropClassName = `fixed top-0 left-0 w-full h-full inset-0 bg-black opacity-60 ${
    isOpen ? 'block' : 'hidden'
  }`;

  if (!isOpen) {
    return null;
  }

  return (
    <div>
    <div className={backdropClassName} onClick={onClose}></div>
    <div className={modalClassName}>
      <div className="relative z-50 bg-white p-4 rounded-lg shadow-md">
        <button
          className="absolute top-4 right-5 text-red-600 hover:text-gray-800"
          onClick={onClose}
        >
          X
        </button>
      {children}
    </div>
  </div>
 </div>
  );
};

export default Modal;
