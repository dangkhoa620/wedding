import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

const images = ['petals-1.png', 'petals-2.png', 'petals-3.png'];

const Petal = () => {
  const [snowflakes, setSnowflakes] = useState<
    Array<{
      imgSrc: string;
      left: number;
      duration: number;
      delay: number;
      key: string;
    }>
  >([]);

  // Continuously add snowflakes to the page
  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((prev) => {
        const i = prev.length;
        const result = [...prev];
        const newItem = {
          imgSrc: images[i % images.length],
          left: Math.random() * 100,
          duration: 60 + Math.random() * 3,
          delay: Math.random() * 3,
          key: Date.now().toString(),
        };

        if (result.length >= 100) {
          result.shift();
        }

        return [...result, newItem];
      });
    }, 1000); // New snowflake every 100ms

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);
  return (
    <Box
      position="absolute"
      sx={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        top: 0,
        left: 0,
      }}
    >
      {snowflakes.map((item) => {
        return (
          <Box
            key={item.key}
            component="img"
            src={`./assets/${item.imgSrc}`}
            alt="falling image"
            sx={{
              position: 'absolute',
              top: '-10%',
              left: `${item.left}%`,
              width: '20px',
              height: '20px',
              opacity: 0.8,
              animation: `falling ${item.duration}s linear ${item.delay}s infinite, sway 5s ease-in-out infinite`,
            }}
          />
        );
      })}

      <style>
        {`
          @keyframes falling {
            0% { top: -10%;  opacity: 0.8}
            100% { top: 110%; opacity: 0}
          }
            @keyframes sway {
              0%, 100% {
                  transform: translateX(-20px);
              }
              50% {
                  transform: translateX(20px);
              }
          }
        `}
      </style>
    </Box>
  );
};

export default Petal;
