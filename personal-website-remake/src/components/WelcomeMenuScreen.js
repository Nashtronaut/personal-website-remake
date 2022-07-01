import React from 'react';
import { Stack, Grid, Box, Button } from '@mui/material';
import Typewriter from 'typewriter-effect';

export default class WelcomeMenuScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            confirmation: false,
            alreadyAnimated: false,
            header: `<p>|コ:彡 Squidtechnica Information Systems ... V.10.203.A</p>
                    <p>Initilizing Profile "<span class="green-text">NASH BOISVERT</span>" ID: <span class="green-text">nb960522</span> ... <span class="success-text">OK!</span></p>`,
            menu: `<p>Welcome! Please choose from below by clicking or typing ... <span class="success-text">OK!</span></p>
                    <p>A = <Button class="console-button menu-space">About</Button></p>
                    <p>B = <Button class="console-button menu-space">Github</Button></p>
                    <p>C = <Button class="console-button menu-space">Skills</Button></p>
                    <p>D = <Button class="console-button menu-space">Contact</Button></p>
                    <p>E = <Button class="console-button menu-space">More commands</Button></p>`,
            input: `<span class="pink-text">nash_boisvert@gvrnmnt_mainframe:</span> /@data/profiles/nb960522/__information$   `,
            DELAY: 5,
            pause_one: this.header.length * this.DELAY + 1200,
            pause_two: this.pause_one * this.DELAY + 200,
            containerStyles: {
                fontFamily: 'Hack, monospace',
                fontSize: 20,
                p: '1rem'
            }
        }
    }

    componentDidMount() {
        const input = document.querySelector('.console-input')
        input.autoFocus = true;
        this.setState({alreadyAnimated: true})
    }

    render() {
        if (this.state.alreadyAnimated) {
            return (
                <Box sx={this.containerStyles} color={'white'}>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12}>
                            <Typewriter
                                onInit={(tr) => {
                                    tr.pauseFor(1000)
                                        .typeString(this.header)
                                        .start();
                                }}
                                options={{
                                    delay: this.DELAY,
                                    cursor: ' '
                                }} />
                        </Grid>

                        <Grid item xs={12}>
                            <Stack gap={5}>
                                <Typewriter
                                    onInit={(tr) => {
                                        tr.pauseFor(this.pause_one)
                                            .typeString(this.menu)
                                            .start();
                                    }}
                                    options={{
                                        delay: this.DELAY,
                                        cursor: ' '
                                    }} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 15 }}>
                            <Stack direction='row' gap={2}>
                                <Typewriter
                                    onInit={(tr) => {
                                        tr.pauseFor(this.pause_two)
                                            .typeString(this.input)
                                            .start();
                                    }}
                                    options={{
                                        delay: this.DELAY,
                                        cursor: ' '
                                    }} />
                                <input autoFocus class="console-input" maxLength='1' />

                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            );
        }
        else {
            return (
                <Box sx={this.containerStyles} color={'white'}>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12}>
                            <p>|コ:彡 Squidtechnica Information Systems ... V.10.203.A</p>
                            <p>Initilizing Profile "<span class="green-text">NASH BOISVERT</span>" ID: <span class="green-text">nb960522</span> ... <span class="success-text">OK!</span></p>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack gap={3}>
                                <p>Welcome! Please choose from below by clicking or typing ... <span class="success-text">OK!</span></p>
                                <p>A = <Button class="console-button menu-space">About</Button></p>
                                <p>B = <Button class="console-button menu-space">Github</Button></p>
                                <p>C = <Button class="console-button menu-space">Skills</Button></p>
                                <p>D = <Button class="console-button menu-space">Contact</Button></p>
                                <p>E = <Button class="console-button menu-space">More commands</Button></p>
                            </Stack>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack direction='row' gap={2}>
                                <p><span class="pink-text">nash_boisvert@gvrnmnt_mainframe:</span> /@data/profiles/nb960522/__information$   </p>
                                <input autoFocus class="console-input" maxLength='1' />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            );
        }
    }
}
