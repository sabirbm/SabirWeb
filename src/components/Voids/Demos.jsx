import React, { useState, useEffect } from 'react';
import FrontEnd from './FrontEnd';
import FrontEnd2 from './FrontEnd2';
import './Videos.css';
function Demos() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {screenWidth <= 400 && (
        <FrontEnd2 />
      )}
      {screenWidth <= 990 && (
        <FrontEnd2 />
      )}
      {screenWidth > 992 && (
        <FrontEnd />
      )}
    </div>
  );
}

export default Demos;
