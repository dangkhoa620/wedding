import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { PALETTE } from '@/constant';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

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
      },
      {
        date: '01/05/2025',
        title: t('event.wedding.groom'),
        time: '09:00',
        address: t('event.wedding.groomAdress'),
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
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: 'url(./assets/album/006.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: '100% ',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          animation: 'backgroundZoom 10s infinite alternate ease-in-out',
          width: '100%',
          height: '100%',
          clipPath: 'polygon(0 15, 100% 0%, 100% 100, 0 100%)',
          overflow: 'hidden',
          '::after': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#c2b6a9',
            opacity: 0.5,
          },
        }}
      ></Box>
      <Box
        className="section-content no-padding"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          position: 'relative',
          padding: '5rem',
          width: '100%',
        }}
      >
        <Stack
          sx={{
            backgroundColor: PALETTE.MAIN_BLUR,
            padding: '3rem',
            gap: '3rem',
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#fff',
              textAlign: 'center',
            }}
          >
            {t('event.title')}
          </Typography>
          <Stack
            sx={{
              gap: '1.5rem',
            }}
          >
            {events.map((item) => {
              return (
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    padding: '2rem',
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
                        padding: '2rem',
                      }}
                    >
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
                      }}
                    ></Box>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Event;
