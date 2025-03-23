import React, { ForwardedRef, forwardRef } from 'react';

import { Box, Stack } from '@mui/material';

interface PageProps {
  pageNumber: number;
  image: string;
}

const Page = ({ pageNumber, image }: PageProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Box
      ref={ref}
      sx={{
        background: '#fdfaf7',
        border: '1px solid #c2b5a3',
        '&.--left': {
          boxShadow: 'inset -7px 0 30px -7px rgba(0,0,0,.4)',
          borderRight: 0,
        },
        '&.--right': {
          boxShadow: 'inset 7px 0 30px -7px rgba(0,0,0,.4)',
          borderLeft: 0,
        },
      }}
    >
      <Stack
        direction="column"
        sx={{
          image: {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Box>
          <img src={image} alt={`Page ${pageNumber}`} />
        </Box>
      </Stack>
    </Box>
  );
};

export default forwardRef<HTMLDivElement, PageProps>(Page);
