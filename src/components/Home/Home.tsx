import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Divider, Typography } from '@mui/material';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
      component="section"
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: 'url(./assets/album/008.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: '100% ',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          animation: 'backgroundZoom 10s infinite alternate ease-in-out',
          width: '100%',
          height: '100%',
          clipPath: 'polygon(0 0, 100% 0%, 100% 85%, 0 100%)',
          overflow: 'hidden',
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          flexDirection: 'column',
          color: 'white',
          gap: '2rem',
          height: '100%',
        }}
        className="section-content"
      >
        <Typography variant="h4">Save the date</Typography>
        <Typography variant="h1">
          {t('general.groomFriendlyName')} & {t('general.brideFriendlyName')}
        </Typography>
        <Divider sx={{ width: '20rem', height: '2px', backgroundColor: 'white' }} />
        <Typography variant="h4">30/04/2025</Typography>
      </Box>
    </Box>
  );
};

export default Home;
