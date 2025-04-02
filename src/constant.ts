export const imagesArray = Array.from({ length: 8 }).map((_, index) => {
  return {
    name: (index + 1).toString().padStart(3, '0'),
    url: `/assets/album/${(index + 1).toString().padStart(3, '0')}.jpg`,
  };
});

export const GROOM = 'Lê Văn A';
export const BRIDE = 'Nguyễn Thị B';

export const GROOM_FIRST_NAME = GROOM.split(' ')[0];
export const BRIDE_FIRST_NAME = BRIDE.split(' ')[0];
export const GROOM_LAST_NAME = GROOM.split(' ')[GROOM.split(' ').length - 1];
export const BRIDE_LAST_NAME = BRIDE.split(' ')[BRIDE.split(' ').length - 1];
export const GROOM_FRIENDLY_NAME = `${GROOM.split(' ')[GROOM.split(' ').length - 2]} ${GROOM_LAST_NAME}`;
export const BRIDE_FRIENDLY_NAME = `${BRIDE.split(' ')[BRIDE.split(' ').length - 2]} ${BRIDE_LAST_NAME}`;
export const GROOM_INITIAL = GROOM_LAST_NAME[0];
export const BRIDE_INITIAL = BRIDE_LAST_NAME[0];

// export const PALETTE = {
//   MAIN: '#E27956',
//   MAIN_BLUR: 'rgba(226, 121, 86, 0.7)',
// };

export const PALETTE = {
  MAIN: '#EC4B72',
  MAIN_LIGHT: '#FFA5BA',
  MAIN_BLUR: 'rgba(255, 165, 186, 0.7)',
  TYPOGRAPHY: '#767878',
};

export const GROOM_DATE = new Date(new Date('2025-05-01').setHours(9));
export const BRIDE_DATE = new Date(new Date('2025-04-30').setHours(9));
