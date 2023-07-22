import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ timecheck }) => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = moment();

      const targetTime = now.clone().hour(22).minute(49).second(49);

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
    if (remainingTime === '00:00:00') {
      timecheck();

    }
  }, [remainingTime]);

  return (
    <p id='timer'>{remainingTime}</p>
  );
};

export default Timer;
