import React from 'react';
import { useTranslation } from 'react-i18next';

import { PALETTE } from '@/constant';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          backgroundColor: PALETTE.MAIN_LIGHT,
          color: '#fff',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
          }}
        >
          {t('general.groomFirstName')}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
          }}
        >
          &
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
          }}
        >
          {t('general.brideFirstName')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
