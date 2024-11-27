import React from 'react';

const Greeting = () => {
  const userName = 'John';
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <p>Welcome to our website. Today is {formattedDate}.</p>
    </div>
  );
};

export default Greeting;

