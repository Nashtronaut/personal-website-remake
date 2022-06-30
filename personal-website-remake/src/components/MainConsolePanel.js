import { Box, Paper, Stack, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";

const baseStyles = {
    width: '95rem',
    height: '50rem',
    backgroundColor: '#1A1B27'
};

const windowStyles = {
    border: '2px solid #9499B6',
    height: 1,
    width: 1,
    borderRadius: '0 0 1rem 1rem' 
};

const topBarStyles = {
    display: 'inline-block',
    backgroundColor: '#9499B6',
    height: '2rem',
    width: '93rem',
    border: '2px solid #9499B6',
    borderRadius: '1rem 1rem 0 0',
    px: '1rem',
}

const MainConsolepanel = styled((props) => {
    const content = props.content;

    return (
        <Stack>
            <Box sx={topBarStyles}>
                <Typography mt={0.5} fontFamily={'Hack, monospace'} fontSize={18} color={'white'}>
                    Command Prompt
                </Typography>
            </Box>
            <Paper elevation={15} sx={baseStyles}>
                <Box sx={windowStyles}>
                    {content}
                </Box>
            </Paper>    
        </Stack>
        
        );
})();

export default MainConsolepanel;