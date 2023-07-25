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
      const remainingMilliseconds = duration.as('milliseconds');
      
      // Calculate hours, minutes, and seconds from the remaining milliseconds
      const hours = Math.floor(remainingMilliseconds / (60 * 60 * 1000));
      const minutes = Math.floor((remainingMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((remainingMilliseconds % (60 * 1000)) / 1000);

      // Format the time as HH:mm:ss
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

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
      {remainingTime}
    </p>
  );
};

export default Timer;
