// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import HTMLFlipBook from 'react-pageflip';

// import { imagesArray, PALETTE } from '@/constant';
// import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

// import Page from './Page';

// const getHeight = (width: number) => (width * 1280) / 940;

// const getBookSize = (size: 'large' | 'medium' | 'small' = 'small') => {
//   let width = 500;
//   switch (size) {
//     case 'medium':
//       width = 300;
//       break;
//     case 'small':
//       width = 200;
//       break;
//     default:
//       break;
//   }

//   return {
//     width,
//     height: getHeight(width),
//   };
// };

// const Story = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMedium = useMediaQuery(theme.breakpoints.up('sm')); // 600px - 899px
//   const isLarge = useMediaQuery(theme.breakpoints.up('md')); // >= 900px

//   const bookSize = isLarge ? getBookSize('large') : isMedium ? getBookSize('medium') : getBookSize('small');
//   console.log(' Story - bookSize:', bookSize);

//   return (
//     <Box component="section" id="album">
//       <Box
//         className="section-content"
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//           gap: '2rem',
//         }}
//       >
//         <Typography variant="h2" component="div">
//           <Box>{t('story.title')}</Box>
//         </Typography>
//         <Box
//           sx={{
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'start',
//             height: 'calc(100vh - 144px)',
//             overflow: 'hidden',
//           }}
//         >
//           <HTMLFlipBook
//             width={bookSize.width}
//             height={bookSize.height}
//             minWidth={bookSize.width}
//             minHeight={bookSize.height}
//             maxWidth={bookSize.width}
//             size="stretch"
//             maxShadowOpacity={0.5}
//             mobileScrollSupport={true}
//             usePortrait={false}
//             showCover={true}
//             style={{
//               boxShadow: '0 0 20px 0 rgba(0,0,0,.5)',
//             }}
//           >
//             <Page pageNumber={0} image={'/assets/book_cover.png'} />
//             {imagesArray.map((item, index) => {
//               return <Page key={item.name} pageNumber={index + 1} image={item.url} />;
//             })}
//           </HTMLFlipBook>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Story;
import React from 'react';

const Story = () => {
  return <div>Story</div>;
};

export default Story;
