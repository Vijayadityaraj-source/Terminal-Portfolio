import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Terminal from './Terminal';
import Animation from './Animation';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowAnimation(window.innerWidth >= 1200);
    };

    // Set the initial state based on the current width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <Terminal />
      {showAnimation && <Animation />}
    </>
  );
}

export default App;
