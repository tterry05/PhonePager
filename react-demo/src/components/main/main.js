import React from 'react';
import Grid from '@mui/material/Grid';
import Header from './header';

export default function Main() {
    console.log('working');
    return (
        <Grid container justifyContent="center">
            <Grid container>
                <Header/>
            </Grid>
        </Grid>
    );
}
