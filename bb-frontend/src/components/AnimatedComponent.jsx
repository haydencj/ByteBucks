import React, { useState, useEffect } from 'react';

function AnimatedComponent({ children }) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`animated-component ${showComponent ? 'show' : ''}`}
      style={{
        transition: 'opacity 1s ease, transform 1s ease',
        opacity: showComponent ? 1 : 0,
        transform: showComponent ? 'scale(1)' : 'scale(0.5)',
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedComponent;
