'use client'
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if(!mounted) {
    return null
  }

  return (
    <h1 className='text-sm w-24 text-center'>
      <span className='font-bold'>IST</span> {time.toLocaleTimeString('en-GB', { timeZone:'Asia/Kolkata', hour12: false })}
    </h1>
  );
};

export default Clock;
