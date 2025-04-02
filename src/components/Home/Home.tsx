import { useTranslation } from 'react-i18next';

import { Box, Divider, Typography } from '@mui/material';

import { Parallax } from '../Parallax';

const Home = ({ date, isBride }: { date: string; isBride?: boolean }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        clipPath: 'polygon(0 0, 100% 0%, 100% 85%, 0 100%)',
        overflow: 'hidden',
      }}
      component="section"
    >
      <Parallax scrollEffect img="./assets/album/004.jpg"></Parallax>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          flexDirection: 'column',
          color: 'white',
          gap: '2rem',
          height: '100%',
        }}
        className="section-content"
      >
        <Typography variant="h4">Save the date</Typography>
        {isBride ? (
          <Typography variant="h1">
            {t('general.brideFriendlyName')} & {t('general.groomFriendlyName')}
          </Typography>
        ) : (
          <Typography variant="h1">
            {t('general.groomFriendlyName')} & {t('general.brideFriendlyName')}
          </Typography>
        )}

        <Divider sx={{ width: '20rem', height: '2px', backgroundColor: 'white' }} />
        <Typography variant="h4">{date}</Typography>
      </Box>
    </Box>
  );
};

export default Home;
