import { Stack, ThemeProvider } from '@mui/material';

import { Album } from './components/Album';
import { AudioButton } from './components/AudioButton';
import { Event } from './components/Event';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
// import { Story } from './components/Story';
import { TheDate } from './components/TheDate';
import { Us } from './components/Us';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column" spacing={5} useFlexGap sx={{}}>
        <Nav></Nav>
        <Home></Home>
        <Us></Us>
        <TheDate></TheDate>

        {/* <Story></Story> */}
        <Album></Album>
        <Event></Event>
        <AudioButton></AudioButton>
      </Stack>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
