import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Stack } from '@mui/material';

import { SectionTitle } from '../SectionTitle';
import Profile from './Profile';

const Us = ({ isBride }: { isBride?: boolean }) => {
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
        <Stack
          direction={isBride ? 'row-reverse' : 'row'}
          useFlexGap
          gap={3}
          flexWrap={isBride ? 'wrap-reverse' : 'wrap'}
          justifyContent="center"
        >
          <Profile avatar="./assets/groom.jpg" name={t('general.groomFriendlyName')} description={t('couple.groom')} />
          <Profile avatar="./assets/bride.jpg" name={t('general.brideFriendlyName')} description={t('couple.bride')} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Us;
