import './FallingRectangleAnimation.css';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FallingRectangleAnimation = () => {
  const rectangleControls = useAnimation();
  const ballControls = useAnimation();
  const triangleControls = useAnimation();

  useEffect(() => {
    rectangleControls.start({
      x: '32.2vw',
      y: '35vh',
      rotate: 135,
      transition: { duration: 3 },
    });

    ballControls.start({
      x: ['50vw', '50vw', '20vw'],
      y: ['-100vh', '60vh', '60vh'],
      transition: {
        duration: 10,
      },
    });

    triangleControls.start({
      x: ['50vw', '75vw'], 
      y: ['-100vh', '50vh'],
      transition: {
        duration: 10,
      },
    });
  }, [rectangleControls, ballControls, triangleControls]);

  return (
    <div className="animation-container">
      <motion.div
        className="falling-rectangle"
        animate={rectangleControls}
        initial={{ x: '32.2vw', y: '-200vh', rotate: 90 }}
      />
      <motion.div
        className="falling-ball"
        animate={ballControls}
        initial={{ x: '0vw', y: '0vh' }}
      />
      <motion.div
        className="falling-triangle"
        animate={triangleControls}
        initial={{ x: '0vw', y: '0vh' }}
      />
    </div>
  );
};

export default FallingRectangleAnimation;