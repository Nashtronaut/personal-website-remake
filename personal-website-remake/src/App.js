import './App.css';
import MainConsolePanel from './components/MainConsolePanel'
import { Box } from '@mui/material';
import WelcomeMenuScreen from './components/WelcomeMenuScreen';

function App() {

    const centering = {
        w: '100vw', h: '100vh', display: 'flex', justifyContent: 'center', pt: '10%'
    };

    return (
        <Box sx={centering}>
            <MainConsolePanel content={WelcomeMenuScreen}/> 
        </Box>
        );
}

export default App;
