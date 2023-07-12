import { useRoutes} from 'react-router-dom'
import { Router } from './routes/router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { baselightTheme } from './theme/Default';
import './theme/main.css'

function App() {
    const routing = useRoutes(Router)
    const theme = baselightTheme;

  return (
    <ThemeProvider theme={theme}>

     {routing}
     </ThemeProvider>
  );
}

export default App;
