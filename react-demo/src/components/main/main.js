import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Main() {
    console.log('working');
    return (
        <Grid container justifyContent="center">
            <Grid container>

                <Grid item xs={12} justifyContent="center">
                    <Box sx={{height: '133px', width: '80%', backgroundColor: '#00ADB5'}}>
                        <Typography variant="h1" color="white">Phone Pager System</Typography>
                    </Box>
                </Grid>

            </Grid>
        </Grid>
    );
}
