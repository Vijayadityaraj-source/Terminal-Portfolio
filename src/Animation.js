import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Animation = () => {
  useEffect(() => {
    // This function will be called when the component mounts
    const initializeSpline = async () => {
      const canvas = document.getElementById('canvas3d');
      const app = new Application(canvas);
      
      try {
        // Load the Spline scene
        await app.load('https://prod.spline.design/zQvHMqSWh2IMOQEO/scene.splinecode');
      } catch (error) {
        console.error('Error loading Spline scene:', error);
      }
    };

    // Call the initialization function
    initializeSpline();
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
      <canvas style={{
        position: 'fixed',
        top: 0,
        left: "25%",
        margin: '16px', // Adjust the margin as needed
        zIndex: -1000, // Ensure it's above other elements
      }} id="canvas3d"></canvas>
  );
};

export default Animation;
