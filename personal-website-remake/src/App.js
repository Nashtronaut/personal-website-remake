import './App.css';
import MainMenu from './components/MainMenu'
import MainConsolePanel from './components/MainConsolePanel'
import { Box } from '@mui/material';
import WelcomeSplashPanel from './components/WelcomeSplashPanel';

function App() {

    const centering = {
        w: '100vw', h: '100vh', display: 'flex', justifyContent: 'center', pt: '10%'
    };

    return (
        <Box sx={centering}>
            <MainConsolePanel content={<WelcomeSplashPanel /> }/> 
        </Box>
        );
}

export default App;
