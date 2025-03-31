import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PALETTE } from '@/constant';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton, Tooltip } from '@mui/material';

const AudioButton = () => {
  const [audio] = useState(new Audio('/assets/MerryGoRound.mp3'));
  const [playing, setPlaying] = useState(false);
  const { t } = useTranslation();

  const toggleAudio = () => setPlaying(!playing);

  useEffect(() => {
    const onAudioEnd = () => {
      audio.currentTime = 0;
    };
    audio.addEventListener('ended', onAudioEnd);
    return () => {
      audio.removeEventListener('ended', onAudioEnd);
    };
  }, [audio]);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing, audio]);

  return (
    <Tooltip title={playing ? t('general.turnOffMusic') : t('general.turnOnMusic')} placement="top">
      <IconButton
        sx={{
          position: 'fixed',
          bottom: '3rem',
          left: '3rem',
          zIndex: 900,
          backgroundColor: PALETTE.MAIN_LIGHT,
          color: 'white',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: PALETTE.MAIN,
          },
        }}
        onClick={toggleAudio}
      >
        {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default AudioButton;
