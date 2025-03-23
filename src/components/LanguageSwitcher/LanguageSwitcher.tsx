import React from 'react';
import { useTranslation } from 'react-i18next';

import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const languageOptions = [
    {
      icon: './assets/vi.png',
      value: 'vi',
      label: t('nav.vi'),
    },
    {
      icon: './assets/en.png',
      value: 'en',
      label: t('nav.en'),
    },
  ];

  const selectedLanguage = languageOptions.find((option) => option.value === i18n.resolvedLanguage);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <>
      <Button
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: '#000000',
          fontSize: '1rem',
        }}
      >
        <Stack direction="row" gap={1} alignItems="center">
          <img src={selectedLanguage?.icon} alt={selectedLanguage?.value} className="lang-icon" />
          {selectedLanguage?.label}
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {languageOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === i18n.resolvedLanguage}
            onClick={() => changeLanguage(option.value)}
          >
            <Stack direction="row" gap={1} alignItems="center">
              <img src={option.icon} alt={option.label} className="lang-icon" />
              {option.label}
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
