import React, { useState } from 'react';

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
        <p className="solution">{solution}</p>
        <p>The next Hero will be chosen in </p>
        <button className='switchstyle2' onClick={handleClose}>Close</button>
        {/* Add a clock that changes the hero at 5 pm every day*/}
      </div>
    </div>
  );
};

export default Modal;
