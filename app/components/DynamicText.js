"use client";
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import './DynamicText.css';

const phrases = [
  "Quick Learner",
  "Game Developer",
  "Problem Solver",
  "Java Developer",
  "C++ Developer",
  "Unity Developer",
  "Python Developer",
  "Cybersecurity enthusiast",
  "Full-stack Developer",
  "Teamplayer",
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(true);
      }, 500);/*fadeout/in anim duration ms*/
    }, 6000);/*total time duration of each phrase in ms*/

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dynamic-text-container">
      <span
        className={classNames(
          'dynamic-text',
          { 'opacity-0': !fade, 'opacity-100': fade }
        )}
      >
        {phrases[currentIndex]}
      </span>
    </div>
  );
};

export default DynamicText;