import React from 'react';

import { PALETTE } from '@/constant';
import { Typography } from '@mui/material';

const Paragraph = ({ children }: { children?: React.ReactElement | string }) => {
  return (
    <Typography
      variant="h6"
      sx={{
        color: PALETTE.TYPOGRAPHY,
        fontWeight: '400',
        fontFamily: 'Quicksand, sans-serif',
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
