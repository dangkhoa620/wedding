import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { PALETTE } from '@/constant';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import { SectionTitle } from '../SectionTitle';

const Event = () => {
  const { t } = useTranslation();

  const events = useMemo(
    () => [
      // {
      //   date: '05/01/2025',
      //   title: t('event.engagement'),
      //   time: '09:00',
      // },
      {
        date: '30/04/2025',
        title: t('event.wedding.bride'),
        time: '09:00',
        address: t('event.wedding.brideAddress'),
        image: './assets/map-bride.png',
        map: '',
      },
      {
        date: '01/05/2025',
        title: t('event.wedding.groom'),
        time: '09:00',
        address: t('event.wedding.groomAdress'),
        image: './assets/map-groom.png',
        map: '',
      },
    ],
    [t],
  );

  return (
    <Box
      component="section"
      id="event"
      sx={{
        width: '100vw',
        height: '90vh',
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <Box
        className="section-content no-padding"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          padding: '5rem',
          width: '100%',
        }}
      >
        <SectionTitle title={t('event.title')}></SectionTitle>
        <Stack
          sx={{
            gap: '3rem',
          }}
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {events.map((item) => {
            return (
              <Box
                key={item.title}
                sx={{
                  backgroundColor: '#fff',
                  padding: '3rem',
                  maxWidth: '400px',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Stack
                    gap="1rem"
                    sx={{
                      padding: '3rem',
                      zIndex: 2,
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      sx={{
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        console.log('Click');
                        window.open(item.map, '_blank');
                      }}
                    ></Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: PALETTE.MAIN,
                        fontWeight: 'normal',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="0.5rem">
                      <CalendarMonthIcon />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'normal',
                        }}
                      >
                        {item.time} {item.date}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap="0.5rem">
                      <PlaceIcon />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'normal',
                        }}
                      >
                        {item.address}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Box
                    component="span"
                    sx={{
                      position: 'absolute',
                      width: 'calc(100% + 20px)',
                      height: '100%',
                      border: '2px solid',
                      borderColor: PALETTE.MAIN,
                      opacity: 0.3,
                      display: 'block',
                      left: '-10px',
                      top: 0,
                      zIndex: 1,
                    }}
                  ></Box>
                  <Box
                    component="span"
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: 'calc(100% + 20px)',
                      top: '-10px',
                      border: '2px solid',
                      borderColor: PALETTE.MAIN,
                      opacity: 0.3,
                      display: 'block',
                      zIndex: 1,
                    }}
                  ></Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Event;
