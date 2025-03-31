import React from 'react';
import { useTranslation } from 'react-i18next';

import { imagesArray } from '@/constant';
import useBreakpoints from '@/hooks/useBreakpoints';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { ImageViewer } from '../ImageViewer';
import { SectionTitle } from '../SectionTitle';

const Album = () => {
  const { isLG } = useBreakpoints();
  const { t } = useTranslation();
  const images = imagesArray.map((item) => ({
    name: item.name,
    srcSet: `${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`,
    src: `${item.url}?w=248&fit=crop&auto=format`,
    originalSrc: item.url,
    alt: item.name,
  }));
  return (
    <Box component="section" id="album">
      <Box
        className="section-content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <SectionTitle title={t('album.title')} />
        <ImageList
          variant="masonry"
          cols={isLG ? 4 : 3}
          gap={20}
          sx={{
            marginTop: '2rem',
            padding: '4rem 6rem',
          }}
        >
          {images.map((item, index) => (
            <ImageListItem key={item.name}>
              <ImageViewer images={images} selectedImage={index} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Album;
