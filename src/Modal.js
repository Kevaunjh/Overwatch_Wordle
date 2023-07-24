import React, { useState } from 'react';
import Timer from './Timer';
import Moment from 'react-moment';

const Modal = ({ solution, timecheck}) => {
  const [showModal, setShowModal] = useState(true);


  const handleClose = () => {
    setShowModal(false);
  };

  
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div>
        <h1>You Win!</h1>
        <h4>The hero of the day was</h4>
        <p className="solution">{solution}</p>
        <p>The next Hero will be chosen in </p>
        <Timer timecheck={timecheck} handleClose={handleClose}/>
        <button className='switchstyle2' onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
