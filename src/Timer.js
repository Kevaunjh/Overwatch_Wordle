import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ timecheck, handleClose }) => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = moment();
      const targetTime = now.clone().hour(17).minute(0).second(0);

      if (now.isAfter(targetTime)) {
        targetTime.add(1, 'day');
      }

      const duration = moment.duration(targetTime.diff(now));
      const formattedTime = moment.utc(duration.as('milliseconds')).format('HH:mm:ss');

      setRemainingTime(formattedTime);
    };

    updateTimer();

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (remainingTime === '00:00:03' || remainingTime === '00:00:02' || remainingTime === '00:00:01') {
      handleClose();
    }

    if (remainingTime === '00:00:00') {
      timecheck();
    }
  }, [remainingTime]);

  return (
    <p id='timer'>
      <p> </p>
    {remainingTime === '' ? 'Loading...' : remainingTime}
  </p>
  );
};

export default Timer;
