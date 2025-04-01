import React from 'react';

import { Box } from '@mui/material';

const images = ['petals-1.png', 'petals-2.png', 'petals-3.png'];

const Petal = () => {
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
      {Array.from({ length: 15 }).map((_, i) => {
        const imgSrc = images[i % images.length];
        const left = Math.random() * 100;
        const duration = 60 + Math.random() * 3;
        const delay = Math.random() * 3;

        return (
          <Box
            key={i}
            component="img"
            src={`./assets/${imgSrc}`}
            alt="falling image"
            sx={{
              position: 'absolute',
              top: '-10%',
              left: `${left}%`,
              width: '20px',
              height: '20px',
              opacity: 0.8,
              animation: `falling ${duration}s linear ${delay}s infinite`,
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
        `}
      </style>
    </Box>
  );
};

export default Petal;
