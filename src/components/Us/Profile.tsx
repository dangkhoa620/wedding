import React from 'react';

import { PALETTE } from '@/constant';
import { Box, Stack, Typography } from '@mui/material';

import { Paragraph } from '../Paragraph';

const Profile = ({ avatar, name, description }: { avatar: string; name: string; description: string }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={1}
      sx={{
        flex: '1 1 auto',
        maxWidth: '400px',
      }}
    >
      <Box
        component="img"
        src={avatar}
        sx={{
          //   display: 'block',
          maxWidth: '300px',
          maxHeight: '300px',
          //   border: '1px solid',
          //   borderColor: PALETTE.MAIN,
          //   borderRadius: '100%',
          '--border': '5px',
          '--gap': '12px',
          '--color': PALETTE.MAIN,
          aspectRatio: '1',
          boxSizing: 'border-box',
          borderRadius: '50%',
          margin: '20px',
          cursor: 'pointer',
          padding: 'calc(var(--border) + var(--gap))',
          '--angle': '90deg',
          background:
            'radial-gradient(farthest-side,var(--color) 97%,#0000 101%) 85.35% 85.35%,\n    conic-gradient(from calc(180deg - var(--angle)/2),#0000 var(--angle),var(--color) 0),\n    radial-gradient(farthest-side,var(--color) 97%,#0000 101%) 14.65% 85.35%',
          backgroundSize: 'var(--border) var(--border),auto',
          backgroundRepeat: 'no-repeat',
          WebkitMask:
            'radial-gradient(farthest-side, \n     #000  calc(99%  - calc(var(--border) + var(--gap))),\n     #0000 calc(100% - calc(var(--border) + var(--gap))) \n           calc(99%  - var(--border)), \n     #000  calc(100% - var(--border)))',
          mask: 'radial-gradient(farthest-side, \n     #000  calc(99%  - calc(var(--border) + var(--gap))),\n     #0000 calc(100% - calc(var(--border) + var(--gap))) \n           calc(99%  - var(--border)), \n     #000  calc(100% - var(--border)))',
          transition: '--angle .4s,--gap .4s',

          '&:hover': {
            '--angle': '0deg',
            '--gap': '5px',
          },
        }}
      ></Box>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          textAlign: 'center',
        }}
      >
        {name}
      </Typography>
      <Paragraph>{description}</Paragraph>
    </Stack>
  );
};

export default Profile;
