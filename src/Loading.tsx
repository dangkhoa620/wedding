import { Box } from '@mui/material';

const HeartFill = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="grey.100">
      <Box
        sx={{
          fill: 'transparent',
          stroke: 'var(--pink)',
          strokeWidth: 20,
          cursor: 'pointer',
          position: 'relative',
          svg: { overflow: 'visible', width: '10rem' },
          path: {
            strokeDashoffset: 0,
            strokeDasharray: '1550',
            transformOrigin: 'center',
          },
          '.heart-background': {
            position: 'absolute',
            left: '0',
            right: '0',
            zIndex: -1,
            stroke: 'none',
          },
          '.heart-main path': {
            animation: 'stroke-animation 2s ease-in-out infinite',
          },
          '.heart-main ~ .heart-background path': {
            animation: 'fade-animation 2s ease-in-out infinite',
          },
        }}
      >
        <svg className="heart-main" viewBox="0 0 512 512" width="100">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>
        <svg className="heart-background" viewBox="0 0 512 512" width="100">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>
      </Box>
    </Box>
  );
};

export default HeartFill;
