import React, { useEffect, useState } from "react";
import { getRelativeTime } from "../../utils/helpers";

const TimePassed = ({ time }) => {
  const [passedTime, setPassedTime] = useState("");

  const date = new Date(time * 1000);
  const DateTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();

  const getTimePassed = () => {
    const timeAgo = getRelativeTime(time * 1000);
    setPassedTime(timeAgo);
  };

  useEffect(() => {
    getTimePassed();
    const interval = setInterval(getTimePassed, 30000);
    return () => clearInterval(interval);
  }, [passedTime]);

  return <div title={DateTime} className="text-xs leading-none m-2">{passedTime}</div>;
};

export default TimePassed;
