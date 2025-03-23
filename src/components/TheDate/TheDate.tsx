import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { PALETTE, THE_DATE } from '@/constant';
import { Box, Stack, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Countdown from './Countdown';

const TheDate = () => {
  const { t } = useTranslation();

  return (
    <Box component="section" id="the-date">
      <Box
        className="section-content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '2rem',
          '.MuiPickersDay-root': {
            '&.Mui-selected': {
              opacity: '1  !important',
              backgroundColor: PALETTE.MAIN,
            },
            fontSize: '1.2rem',
          },
          '.MuiDayCalendar-weekDayLabel': {
            fontSize: '1.2rem',
          },
          '.MuiPickersCalendarHeader-label': {
            fontSize: '1.2rem',
          },
        }}
      >
        <Typography variant="h2" component="h2">
          {t('theDate.title')}
        </Typography>
        <Box
          sx={{
            marginTop: '2rem',
            backgroundColor: '#ffffff',
            padding: '4rem',
          }}
        >
          <Stack
            spacing={5}
            direction={{ xs: 'column', md: 'row' }}
            sx={{
              maxWidth: '800px',
            }}
          >
            <Stack
              sx={{
                position: 'relative',
              }}
            >
              <Box
                component="span"
                sx={{
                  position: 'absolute',
                  width: '110%',
                  height: '100%',
                  border: '3px solid',
                  borderColor: PALETTE.MAIN,
                  opacity: 0.3,
                  display: 'block',
                  left: '-5%',
                  top: 0,
                }}
              ></Box>
              <Box
                component="span"
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '110%',
                  top: '-5%',
                  border: '3px solid',
                  borderColor: PALETTE.MAIN,
                  opacity: 0.3,
                  display: 'block',
                }}
              ></Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar disabled defaultValue={dayjs('2025-05-01')} />
              </LocalizationProvider>
            </Stack>
            <Stack
              sx={{
                position: 'relative',
                width: '320px',
              }}
              spacing={2}
            >
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                }}
              >
                {t('general.groomFirstName')} & {t('general.brideFirstName')}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '400',
                  color: '#333333',
                }}
              >
                {t('theDate.body')}
              </Typography>
              <Stack direction="column" gap={2} justifyContent="space-between">
                <Box
                  component="span"
                  sx={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    height: '20px',
                    '&::after': {
                      content: '""',
                      width: '100%',
                      height: '19px',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      zIndex: 0,
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='19' viewBox='0 0 128 19'%3E%3Cpath fill='%23E27956' d='M3.74,13.725l0.038,0.17a0.724,0.724,0,0,1-.244.489,0.834,0.834,0,0,1-.553.248L2.86,14.618a1.013,1.013,0,0,1-.609-0.467A1.659,1.659,0,0,1,2,13.272l0.016-.22a3.255,3.255,0,0,1,1.256-1.906c1.8-1.5,4.283-2,6.732-2.162q1.109-.072,2.215-0.071c5.872,0,11.731,1.442,17.614,2.9S41.617,14.743,47.6,14.744a32.472,32.472,0,0,0,4.79-.343,13.813,13.813,0,0,0,5.618-2.078,6.491,6.491,0,0,0,3.082-4.841C61.1,7.374,61.1,7.266,61.1,7.156a4.016,4.016,0,0,0-.454-1.882A2.426,2.426,0,0,0,59.16,4.029a2.2,2.2,0,0,0-.575-0.077,2.837,2.837,0,0,0-1.63.578,5.389,5.389,0,0,0-1.2,1.214h0a8.8,8.8,0,0,0-1.643,5.061,6.377,6.377,0,0,0,1.525,4.3,7.659,7.659,0,0,0,5.253,2.3q0.359,0.024.718,0.024a12.169,12.169,0,0,0,8.339-3.561,12.482,12.482,0,0,0,3.89-8.353l0-.229a6.02,6.02,0,0,0-.718-2.873,3.392,3.392,0,0,0-.935-1.088A2.317,2.317,0,0,0,70.82.871l-0.246.013a2.791,2.791,0,0,0-2,1.316,7.094,7.094,0,0,0-.936,2.208,17.158,17.158,0,0,0-.6,4.233,10.349,10.349,0,0,0,.378,2.852,7.818,7.818,0,0,0,1.8,3.194,5.814,5.814,0,0,0,3.131,1.785,5.4,5.4,0,0,0,.994.092,6.954,6.954,0,0,0,4.187-1.6,14.982,14.982,0,0,0,3.15-3.443A6.4,6.4,0,0,0,82.016,8.2l0-.093a3.235,3.235,0,0,0-.593-1.854,2.282,2.282,0,0,0-1.655-1L79.6,5.248a2.406,2.406,0,0,0-1.433.511,3.528,3.528,0,0,0-.97,1.134,4.507,4.507,0,0,0-.546,2.176,6.08,6.08,0,0,0,1.094,3.347,6.851,6.851,0,0,0,2.679,2.348,10.394,10.394,0,0,0,4.531.909,28.454,28.454,0,0,0,4.151-.382c10.132-1.5,20.19-3.819,30.3-3.817q1.119,0,2.24.039a9.778,9.778,0,0,1,2.139.259,3.273,3.273,0,0,1,1.647.928A2.282,2.282,0,0,1,126,14.254a2.915,2.915,0,0,1-.608,1.776,1.878,1.878,0,0,1-1.476.769l-0.223-.014-0.059.509,0.1-.5a2.048,2.048,0,0,1-1.045-.5,0.781,0.781,0,0,1-.251-0.553,0.741,0.741,0,0,1,.11-0.379,0.519,0.519,0,0,0-.163-0.7,0.493,0.493,0,0,0-.687.166,1.781,1.781,0,0,0-.258.917,1.814,1.814,0,0,0,.546,1.28,3.018,3.018,0,0,0,1.541.775l0.044,0.007a2.765,2.765,0,0,0,.341.021,2.867,2.867,0,0,0,2.25-1.146A3.939,3.939,0,0,0,127,14.254a3.321,3.321,0,0,0-.829-2.248,4.247,4.247,0,0,0-2.13-1.224,10.665,10.665,0,0,0-2.355-.292q-1.138-.041-2.275-0.04c-10.262,0-20.364,2.338-30.446,3.827a27.728,27.728,0,0,1-4.008.371,9.442,9.442,0,0,1-4.111-.814,5.853,5.853,0,0,1-2.278-2,5.039,5.039,0,0,1-.917-2.766,3.46,3.46,0,0,1,.418-1.675,2.541,2.541,0,0,1,.687-0.808A1.424,1.424,0,0,1,79.6,6.272l0.09,0a1.291,1.291,0,0,1,.929.586,2.206,2.206,0,0,1,.4,1.248V8.17a5.463,5.463,0,0,1-1.167,2.769,13.98,13.98,0,0,1-2.928,3.208,5.977,5.977,0,0,1-3.589,1.395,4.427,4.427,0,0,1-.814-0.076,4.827,4.827,0,0,1-2.593-1.489,6.807,6.807,0,0,1-1.556-2.769,9.317,9.317,0,0,1-.339-2.566A16.125,16.125,0,0,1,68.6,4.668a6.1,6.1,0,0,1,.788-1.879A1.8,1.8,0,0,1,70.672,1.9l0.148-.008a1.324,1.324,0,0,1,.8.267,2.833,2.833,0,0,1,.9,1.3,5.23,5.23,0,0,1,.335,1.827l0,0.187a11.452,11.452,0,0,1-3.578,7.651,11.185,11.185,0,0,1-7.653,3.281c-0.216,0-.433-0.007-0.65-0.023a6.69,6.69,0,0,1-4.583-1.967,5.342,5.342,0,0,1-1.264-3.609,7.776,7.776,0,0,1,1.446-4.452,4.33,4.33,0,0,1,.963-0.983,1.868,1.868,0,0,1,1.06-.4,1.2,1.2,0,0,1,.321.043,1.425,1.425,0,0,1,.868.752A2.975,2.975,0,0,1,60.1,7.156l-0.01.244a5.467,5.467,0,0,1-2.638,4.072,12.9,12.9,0,0,1-5.21,1.917,31.521,31.521,0,0,1-4.646.332c-5.818,0-11.65-1.442-17.533-2.9S18.249,7.892,12.217,7.891q-1.137,0-2.279.073a12.477,12.477,0,0,0-7.3,2.388A4.24,4.24,0,0,0,1.026,12.9,2.465,2.465,0,0,0,1,13.272a2.7,2.7,0,0,0,.418,1.443,2.016,2.016,0,0,0,1.219.9,1.54,1.54,0,0,0,.345.039,1.807,1.807,0,0,0,1.236-.525,1.738,1.738,0,0,0,.559-1.235,1.417,1.417,0,0,0-.14-0.62,0.494,0.494,0,0,0-.668-0.234A0.517,0.517,0,0,0,3.74,13.725Z'/%3E%3C/svg%3E\")",
                      KhtmlOpacity: '0.5',
                      MozOpacity: '0.5',
                      opacity: 0.5,
                    },
                  }}
                ></Box>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'center',
                    fontWeight: '400',
                  }}
                >
                  {t('general.date')}
                </Typography>
                <Box
                  component="span"
                  sx={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    height: '20px',
                    transform: 'rotate(180deg)',
                    '&::after': {
                      content: '""',
                      width: '100%',
                      height: '19px',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      zIndex: 0,
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='19' viewBox='0 0 128 19'%3E%3Cpath fill='%23E27956' d='M3.74,13.725l0.038,0.17a0.724,0.724,0,0,1-.244.489,0.834,0.834,0,0,1-.553.248L2.86,14.618a1.013,1.013,0,0,1-.609-0.467A1.659,1.659,0,0,1,2,13.272l0.016-.22a3.255,3.255,0,0,1,1.256-1.906c1.8-1.5,4.283-2,6.732-2.162q1.109-.072,2.215-0.071c5.872,0,11.731,1.442,17.614,2.9S41.617,14.743,47.6,14.744a32.472,32.472,0,0,0,4.79-.343,13.813,13.813,0,0,0,5.618-2.078,6.491,6.491,0,0,0,3.082-4.841C61.1,7.374,61.1,7.266,61.1,7.156a4.016,4.016,0,0,0-.454-1.882A2.426,2.426,0,0,0,59.16,4.029a2.2,2.2,0,0,0-.575-0.077,2.837,2.837,0,0,0-1.63.578,5.389,5.389,0,0,0-1.2,1.214h0a8.8,8.8,0,0,0-1.643,5.061,6.377,6.377,0,0,0,1.525,4.3,7.659,7.659,0,0,0,5.253,2.3q0.359,0.024.718,0.024a12.169,12.169,0,0,0,8.339-3.561,12.482,12.482,0,0,0,3.89-8.353l0-.229a6.02,6.02,0,0,0-.718-2.873,3.392,3.392,0,0,0-.935-1.088A2.317,2.317,0,0,0,70.82.871l-0.246.013a2.791,2.791,0,0,0-2,1.316,7.094,7.094,0,0,0-.936,2.208,17.158,17.158,0,0,0-.6,4.233,10.349,10.349,0,0,0,.378,2.852,7.818,7.818,0,0,0,1.8,3.194,5.814,5.814,0,0,0,3.131,1.785,5.4,5.4,0,0,0,.994.092,6.954,6.954,0,0,0,4.187-1.6,14.982,14.982,0,0,0,3.15-3.443A6.4,6.4,0,0,0,82.016,8.2l0-.093a3.235,3.235,0,0,0-.593-1.854,2.282,2.282,0,0,0-1.655-1L79.6,5.248a2.406,2.406,0,0,0-1.433.511,3.528,3.528,0,0,0-.97,1.134,4.507,4.507,0,0,0-.546,2.176,6.08,6.08,0,0,0,1.094,3.347,6.851,6.851,0,0,0,2.679,2.348,10.394,10.394,0,0,0,4.531.909,28.454,28.454,0,0,0,4.151-.382c10.132-1.5,20.19-3.819,30.3-3.817q1.119,0,2.24.039a9.778,9.778,0,0,1,2.139.259,3.273,3.273,0,0,1,1.647.928A2.282,2.282,0,0,1,126,14.254a2.915,2.915,0,0,1-.608,1.776,1.878,1.878,0,0,1-1.476.769l-0.223-.014-0.059.509,0.1-.5a2.048,2.048,0,0,1-1.045-.5,0.781,0.781,0,0,1-.251-0.553,0.741,0.741,0,0,1,.11-0.379,0.519,0.519,0,0,0-.163-0.7,0.493,0.493,0,0,0-.687.166,1.781,1.781,0,0,0-.258.917,1.814,1.814,0,0,0,.546,1.28,3.018,3.018,0,0,0,1.541.775l0.044,0.007a2.765,2.765,0,0,0,.341.021,2.867,2.867,0,0,0,2.25-1.146A3.939,3.939,0,0,0,127,14.254a3.321,3.321,0,0,0-.829-2.248,4.247,4.247,0,0,0-2.13-1.224,10.665,10.665,0,0,0-2.355-.292q-1.138-.041-2.275-0.04c-10.262,0-20.364,2.338-30.446,3.827a27.728,27.728,0,0,1-4.008.371,9.442,9.442,0,0,1-4.111-.814,5.853,5.853,0,0,1-2.278-2,5.039,5.039,0,0,1-.917-2.766,3.46,3.46,0,0,1,.418-1.675,2.541,2.541,0,0,1,.687-0.808A1.424,1.424,0,0,1,79.6,6.272l0.09,0a1.291,1.291,0,0,1,.929.586,2.206,2.206,0,0,1,.4,1.248V8.17a5.463,5.463,0,0,1-1.167,2.769,13.98,13.98,0,0,1-2.928,3.208,5.977,5.977,0,0,1-3.589,1.395,4.427,4.427,0,0,1-.814-0.076,4.827,4.827,0,0,1-2.593-1.489,6.807,6.807,0,0,1-1.556-2.769,9.317,9.317,0,0,1-.339-2.566A16.125,16.125,0,0,1,68.6,4.668a6.1,6.1,0,0,1,.788-1.879A1.8,1.8,0,0,1,70.672,1.9l0.148-.008a1.324,1.324,0,0,1,.8.267,2.833,2.833,0,0,1,.9,1.3,5.23,5.23,0,0,1,.335,1.827l0,0.187a11.452,11.452,0,0,1-3.578,7.651,11.185,11.185,0,0,1-7.653,3.281c-0.216,0-.433-0.007-0.65-0.023a6.69,6.69,0,0,1-4.583-1.967,5.342,5.342,0,0,1-1.264-3.609,7.776,7.776,0,0,1,1.446-4.452,4.33,4.33,0,0,1,.963-0.983,1.868,1.868,0,0,1,1.06-.4,1.2,1.2,0,0,1,.321.043,1.425,1.425,0,0,1,.868.752A2.975,2.975,0,0,1,60.1,7.156l-0.01.244a5.467,5.467,0,0,1-2.638,4.072,12.9,12.9,0,0,1-5.21,1.917,31.521,31.521,0,0,1-4.646.332c-5.818,0-11.65-1.442-17.533-2.9S18.249,7.892,12.217,7.891q-1.137,0-2.279.073a12.477,12.477,0,0,0-7.3,2.388A4.24,4.24,0,0,0,1.026,12.9,2.465,2.465,0,0,0,1,13.272a2.7,2.7,0,0,0,.418,1.443,2.016,2.016,0,0,0,1.219.9,1.54,1.54,0,0,0,.345.039,1.807,1.807,0,0,0,1.236-.525,1.738,1.738,0,0,0,.559-1.235,1.417,1.417,0,0,0-.14-0.62,0.494,0.494,0,0,0-.668-0.234A0.517,0.517,0,0,0,3.74,13.725Z'/%3E%3C/svg%3E\")",
                      KhtmlOpacity: '0.5',
                      MozOpacity: '0.5',
                      opacity: 0.5,
                    },
                  }}
                ></Box>
                <Box>
                  <Countdown datetime={THE_DATE.toISOString()} />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TheDate;
