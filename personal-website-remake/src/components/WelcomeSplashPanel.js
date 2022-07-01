import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import Typewriter from 'typewriter-effect';

const WelcomeSplashPanel = () => {
    const containerStyles = {
        fontFamily: 'Hack, monospace',
        fontSize: 20,
        p: '1rem'
    };

    const DELAY = 1;

    const header = `
        <p>Squidtechnica Information Systems ... V.10.203.A</p>
        <p>Initilizing Profile "<span class="green-text">NASH BOISVERT</span>" ID: <span class="green-text">323543</span> ... <span class="success-text">OK!</span></p>
        <br/>
        <p>Welcome! Please choose from below by clicking or typing ... <span class="success-text">OK!</span></p>
        <br/>
        <p>A = <Button class="console-button">About</Button></p>
        <br/>
        <p>B = <Button class="console-button">Github</Button></p>
        <br/>
        <p>C = <Button class="console-button">Skills</Button></p>
        <br/>
        <p>D = <Button class="console-button">Contact</Button></p>
        <br/>
        <p>E = <Button class="console-button">More commands</Button></p>`

    const inputLine = `<p>nash_boisvert@gvrnmnt_mainframe: /"im_in"/menu_nav $ <p/>`

    return (
        <Box sx={containerStyles} color={'white'}>
            <Grid container rowSpacing={3 }>
                <Grid item xs={12}>
                    <p>Squidtechnica Information Systems ... V.10.203.A</p>
                    <p>Initilizing Profile "<span class="green-text">NASH BOISVERT</span>" ID: <span class="green-text">nb960522</span> ... <span class="success-text">OK!</span></p>
                </Grid>
                
                <Grid item xs={12}>
                    <Stack gap={3}>
                        <p>Welcome! Please choose from below by clicking or typing ... <span class="success-text">OK!</span></p>
                        <p>A = <Button class="console-button">About</Button></p>
                        <p>B = <Button class="console-button">Github</Button></p>
                        <p>C = <Button class="console-button">Skills</Button></p>
                        <p>D = <Button class="console-button">Contact</Button></p>
                        <p>E = <Button class="console-button">More commands</Button></p>
                    </Stack>
                </Grid>

                <Grid item xs={12} sx={{mt: 15} }>
                    <Stack direction='row'>
                        <p><span class="pink-text">nash_boisvert@gvrnmnt_mainframe:</span> /@data/profiles/nb960522/__information$ <input autoFocus maxLength={'1'}/></p>
                    </Stack>
                </Grid>
            </Grid>
            
        </Box>
        );
};

export default WelcomeSplashPanel;

/*<Typewriter
                        onInit={(tr) => {
                            tr.pauseFor(1000)
                                .typeString(header)
                                .start();
                        }}
                        options={{
                            delay: DELAY,
                            cursor: '|'
                        }} />*/