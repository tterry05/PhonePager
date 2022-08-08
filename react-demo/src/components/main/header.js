import Grid from '@mui/material/Grid';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function(){
    return( 
        <Grid item xs={12} justifyContent="center">
            <Box sx={{backgroundColor: '#00ADB5', textAlign: 'center'}}>
                <Typography variant="h2" color="white" align="center">Phone Pager System</Typography>
            </Box>
        </Grid>
    );
}