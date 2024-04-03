import { extendTheme } from '@chakra-ui/react';
import '@fontsource/archivo-black';
import '@fontsource-variable/league-gothic';

const theme = extendTheme ({
    fonts: {
      heading: `'Archivo Black', sans-serif`,
      body: `'League Gothic Variable', sans-serif`,
    },
    colors: {
      am: {
        100: '#FCF5E5',
        200: '#191919',
        300: '#EFB3B3',
        400: '#CCC9E3',
        500: '#758B81',
      }
    },
  });
  
  export default theme;

