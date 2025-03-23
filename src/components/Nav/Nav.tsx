import React from 'react';
import { useTranslation } from 'react-i18next';

import { PALETTE } from '@/constant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { LanguageSwitcher } from '../LanguageSwitcher';

const NAV_ITEMS = [
  {
    title: 'couple.title',
    href: '#couple',
  },
  {
    title: 'story.title',
    href: '#story',
  },
  {
    title: 'album.title',
    href: '#album',
  },
];

const Nav = () => {
  const trigger = useScrollTrigger();
  const { t } = useTranslation();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        sx={{
          backgroundColor: '#ffffff',
          color: PALETTE.MAIN,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Toolbar
          className="section-content no-padding"
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>{t('general.groomInitial')}</span> <FavoriteIcon></FavoriteIcon>{' '}
            <span>{t('general.brideInitial')}</span>
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            useFlexGap
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.title}
                href={item.href}
                sx={{
                  color: '#000000',
                  fontFamily: 'Comfortaa, serif',
                  fontSize: '1.2rem',
                  textTransform: 'none',
                  fontWeight: 700,
                }}
              >
                {t(item.title)}
              </Button>
            ))}
            <LanguageSwitcher></LanguageSwitcher>
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Nav;
