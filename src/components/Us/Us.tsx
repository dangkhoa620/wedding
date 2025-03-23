import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Us = () => {
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
        <Typography variant="h2" component="h2">
          {t('couple.title')}
        </Typography>
        <Stack
          useFlexGap
          spacing={{
            xs: 2,
            md: 0,
          }}
          sx={{}}
        >
          <Grid
            container
            sx={{
              maxWidth: '800px',
              backgroundColor: '#f2d5ab',
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="./assets/howl-art.jpg"
                sx={{
                  maxWidth: '400px',
                  margin: '0 auto',
                }}
              ></Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction="column"
                useFlexGap
                spacing={2}
                sx={{
                  padding: '1rem 3rem',
                  textAlign: 'justify',
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {t('general.groomFriendlyName')}
                </Typography>
                <Typography variant="body1" component="div">
                  a powerful wizard living in the land of Ingary. Originally Howell Jenkins of Wales, he was part of a
                  loose fraternity of wizards on Earth. He made his way through a magical portal to Ingary, where he
                  became known and respected as one of the most powerful wizards there was. He owns a moving castle, and
                  spreads rumors about himself to retain his privacy, opting to be alone and hiding from all conflict.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              maxWidth: '800px',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              backgroundColor: '#f2d5ab',
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction="column"
                useFlexGap
                spacing={2}
                sx={{
                  padding: '1rem 3rem',
                  textAlign: 'justify',
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {t('general.brideFriendlyName')}
                </Typography>
                <Typography variant="body1" component="div">
                  a young woman living in the small town of Market Chipping in the kingdom of Ingary, and she is the
                  eldest of three sisters. In the land of Ingary, this, of course, means that Sophie is destined to
                  never find her fortune and live a dull life at home. She works in her late father's hat shop as her
                  stepmother, Fanny Hatter's, apprentice whilst her other sisters are off pursuing other careers.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="./assets/sophie-art (1).jpg"
                sx={{
                  maxWidth: '400px',
                  margin: '0 auto',
                }}
              ></Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Us;
