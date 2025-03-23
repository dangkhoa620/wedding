import { useTranslation } from 'react-i18next';
import { Autoplay, EffectCoverflow, FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { imagesArray } from '@/constant';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Album = () => {
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
          gap: '2rem',
        }}
      >
        <Typography variant="h2" component="h2">
          {t('album.title')}
        </Typography>
        <Box
          sx={{
            marginTop: '2rem',
            width: '100%',
            height: '400px',
            '.main-swiper': {
              width: '100%',
              height: '100%',
            },
            '.swiper-slide': {
              width: '400px',
              height: '400px',
            },
          }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            mousewheel={true}
            loop={true}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
              scale: 0.7,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Mousewheel, EffectCoverflow, FreeMode, Autoplay]}
            className="main-swiper"
          >
            {images.map((item) => {
              return (
                <SwiperSlide key={item.alt}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      width: '100%',
                      height: '100%',
                      img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      },
                    }}
                  >
                    <img src={item.originalSrc} alt={item.alt} />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Album;
