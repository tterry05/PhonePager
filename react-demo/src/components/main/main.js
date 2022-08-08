import React from 'react';
import Grid from '@mui/material/Grid';
import Header from './header';
import Button from './phone_number_button';
import Box from '@mui/material/Box';

export default function Main() {
    console.log('working');
    return (
        <Grid container justifyContent="center" rowSpacing={2}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <Button/>
            </Grid>
        </Grid>
    );
}
