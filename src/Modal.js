import React, { useState } from 'react';
import Timer from './Timer';

const Modal = ({ solution }) => {
  const [showModal, setShowModal] = useState(true);


  if (solution === "Junkrat") {
  }

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null; // Return null when showModal is false to hide the modal
  }

  

  return (
    <div className="modal">
      <div>
        <h1>You Win!</h1>
        <h4>The hero of the day was</h4>
        <p className="solution">{solution}</p>
        <p>The next Hero will be chosen in </p>
        <Timer/>
        <button className='switchstyle2' onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
