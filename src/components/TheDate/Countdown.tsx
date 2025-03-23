import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PALETTE } from '@/constant';
import { Grid2, Stack, Typography } from '@mui/material';

type CountdownProps = {
  datetime: string;
};

const Countdown = ({ datetime }: CountdownProps) => {
  const { t } = useTranslation();

  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(datetime).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60) / 24)
        .toString()
        .padStart(2, '0'),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, '0'),
      minutes: Math.floor((difference / (1000 * 60)) % 60)
        .toString()
        .padStart(2, '0'),
      seconds: Math.floor((difference / 1000) % 60)
        .toString()
        .padStart(2, '0'),
    };
  }, [datetime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft, datetime]);

  const displayItems = useMemo(() => {
    return [
      {
        value: timeLeft.days,
        label: t('general.d'),
      },
      {
        value: timeLeft.hours,
        label: t('general.h'),
      },
      {
        value: timeLeft.minutes,
        label: t('general.m'),
      },
      {
        value: timeLeft.seconds,
        label: t('general.s'),
      },
    ];
  }, [t, timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]);

  return (
    <Grid2
      container
      sx={{
        width: '100%',
      }}
    >
      {displayItems.map((item) => {
        return (
          <Grid2 size={{ xs: 12 / displayItems.length }}>
            <Stack>
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  fontWeight: '400',
                  color: PALETTE.MAIN,
                }}
              >
                {item.value}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  fontWeight: '400',
                  color: PALETTE.MAIN,
                }}
              >
                {item.label}
              </Typography>
            </Stack>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default Countdown;
