import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

const Parallax = ({ img, scrollEffect }: { img: string; scrollEffect?: boolean }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!scrollEffect) {
      return;
    }
    const handleScroll = () => {
      requestAnimationFrame(() => setOffset(window.scrollY * 0.5));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollEffect]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundImage: `url(${img})`,
        transform: `translateY(${offset}px)`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
        '::after': {
          position: 'absolute',
          content: '""',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: '#c2b6a9',
          opacity: 0.5,
        },
      }}
    ></Box>
  );
};

export default Parallax;
