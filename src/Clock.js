// Clock.js
import React from "react";
import { useState, useEffect} from 'react';
import Footer from './Footer';

const Clock = () => {
  const [time, setTime] = useState( new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')
  
  return (
    <div className="Clock">
      <div className="ClockContent">
        <div className="ClockTitle">This is a clock</div>
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Clock;