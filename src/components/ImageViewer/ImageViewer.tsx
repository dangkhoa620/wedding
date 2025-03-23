import { useEffect, useState } from 'react';
import SwiperType from 'swiper';
import { EffectCoverflow, FreeMode, Mousewheel, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { hideOverflow, showOverflow } from '@/utils/hideOverflow';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

interface ImageViewerProps {
  images: {
    src: string;
    srcSet?: string;
    alt?: string;
    originalSrc: string;
  }[];
  selectedImage: number;
}

const ImageViewer = ({ images, selectedImage }: ImageViewerProps) => {
  return (
    <>
      <Box
        component="img"
        srcSet={images[selectedImage].srcSet}
        src={images[selectedImage].src}
        alt={images[selectedImage].alt}
      ></Box>
    </>
  );
};

export default ImageViewer;
