import './App.css';
import MainMenu from './components/MainMenu'
import MainConsolePanel from './components/MainConsolePanel'
import { Box } from '@mui/material';

function App() {

    const centering = {
        w: '100vw', h: '100vh', display: 'flex', justifyContent: 'center', pt: '10%'
    };

    return (
        <Box sx={centering}>
            <MainConsolePanel /> 
        </Box>
        );
}

export default App;
