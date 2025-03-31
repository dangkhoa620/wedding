import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { Paragraph } from '../Paragraph';
import { SectionTitle } from '../SectionTitle';
import Profile from './Profile';

const Us = () => {
  const { t } = useTranslation();

  return (
    <Box component="section" id="couple">
      <Box
        className="section-content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '2rem',
          '.swiper': {
            width: '500px',
            height: '500px',
          },
        }}
      >
        <SectionTitle title={t('couple.title')} />
        <Stack direction="row" useFlexGap gap={3} sx={{}} flexWrap="wrap" justifyContent="center">
          <Profile
            avatar="./assets/howl-art.jpg"
            name={t('general.groomFriendlyName')}
            description={t('couple.groom')}
          />
          <Profile
            avatar="./assets/sophie-art (1).jpg"
            name={t('general.brideFriendlyName')}
            description={t('couple.bride')}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Us;
