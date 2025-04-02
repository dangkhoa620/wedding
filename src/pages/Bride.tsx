import React from 'react';

import { Album } from '@/components/Album';
import { AudioButton } from '@/components/AudioButton';
import { Event } from '@/components/Event';
import { Home } from '@/components/Home';
import { Nav } from '@/components/Nav';
import { TheDate } from '@/components/TheDate';
import { Us } from '@/components/Us';
import { Stack } from '@mui/material';

const Bride = () => {
  return (
    <Stack direction="column" spacing={5} useFlexGap sx={{}}>
      <Nav></Nav>
      <Home date="30/04/2025" isBride></Home>
      <Us isBride></Us>
      <TheDate isBride></TheDate>
      <Album></Album>
      <Event isBride></Event>
      <AudioButton></AudioButton>
    </Stack>
  );
};

export default Bride;
