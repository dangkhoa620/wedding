import React from 'react';

import { PALETTE } from '@/constant';
import { Box, Stack, Typography } from '@mui/material';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      gap={2}
      alignItems="center"
      sx={{
        marginBottom: '3rem',
        textAlign: 'center',
        color: PALETTE.MAIN,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: '400',
        }}
      >
        {title}
      </Typography>
      <Box
        component="img"
        src="./assets/divider.png"
        sx={{
          width: '200px',
        }}
      ></Box>
    </Stack>
  );
};

export default SectionTitle;
