"client";
import { useEffect, useState } from "react";

const CountdownTimer = ({ setDisabled }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-05-22T17:00:00Z'); // UTC time
    const currentDate = new Date();
    const difference = eventDate - currentDate;
    if (difference > 0) {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setDisabled(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, setDisabled]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="font-sans space-x-[40px] pr-[20px] bg-no-repeat flex justify-center items-center text-center text-white lg:text-[25px]">
      {/* Day Block */}
      <div className="flex flex-col justify-center items-center">
        <div className="bg-bgtimer2 bg-contain bg-center bg-no-repeat">
          <span className="p-5 flex justify-center items-center">
            {formatTime(days)}
          </span>
        </div>
        <p>days</p>
      </div>
      {/* Hour Block */}
      <div className="flex flex-col justify-center items-center">
        <div className="bg-bgtimer2 bg-contain bg-center bg-no-repeat">
          <span className="p-5 flex justify-center items-center">
            {formatTime(hours)}
          </span>
        </div>
        <p>hours</p>
      </div>
      {/* Minute Block */}
      <div className="flex flex-col justify-center items-center">
        <div className="bg-bgtimer bg-contain bg-center bg-no-repeat">
          <span className="p-5 flex justify-center items-center">
            {formatTime(minutes)}
          </span>
        </div>
        <p>minutes</p>
      </div>
      {/* Second Block */}
      <div className="flex flex-col justify-center items-center">
        <div className="bg-bgtimer bg-contain bg-center bg-no-repeat">
          <span className="p-5 flex justify-center items-center">
            {formatTime(seconds)}
          </span>
        </div>
        <p>seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
