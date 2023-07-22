import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ timecheck }) => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      // Get the current date and time
      const now = moment();

      // Set the target time to 5 PM
      const targetTime = now.clone().hour(20).minute(55).second(0);

      // If the current time is after 5 PM, set the target to tomorrow
      if (now.isAfter(targetTime)) {
        targetTime.add(1, 'day');
      }

      // Calculate the difference between now and the target time
      const duration = moment.duration(targetTime.diff(now));

      // Format the remaining time as HH:mm:ss
      const formattedTime = moment.utc(duration.as('milliseconds')).format('HH:mm:ss');

      // Update the state with the remaining time
      setRemainingTime(formattedTime);
    };

    // Update the timer initially
    updateTimer();

    // Set up an interval to update the timer every second
    const intervalId = setInterval(updateTimer, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Check if the timer has reached 0 (5 PM)
    if (remainingTime === '00:00:00') {
      
      timecheck();
    }
  }, [remainingTime]);

  return (
    <p id='timer'>{remainingTime}</p>
  );
};

export default Timer;
