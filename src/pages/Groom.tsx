import React from 'react';

import { Album } from '@/components/Album';
import { AudioButton } from '@/components/AudioButton';
import { Event } from '@/components/Event';
import { Home } from '@/components/Home';
import { Nav } from '@/components/Nav';
// import Petal from '@/components/Petal/Petal';
import { TheDate } from '@/components/TheDate';
import { Us } from '@/components/Us';
import { Stack } from '@mui/material';

const Groom = () => {
  return (
    <Stack direction="column" spacing={5} useFlexGap sx={{}}>
      <Nav></Nav>
      <Home date="01/05/2025"></Home>
      <Us></Us>
      <TheDate></TheDate>
      <Album></Album>
      <Event></Event>
      <AudioButton></AudioButton>
      {/* <Petal></Petal>s */}
    </Stack>
  );
};

export default Groom;
