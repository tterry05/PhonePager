import React from 'react';
import Grid from '@mui/material/Grid';
import Header from './header';
import Button from './phone_number_button';
import DataTable from './NumberTable';
import Box from '@mui/material/Box';

export default function Main() {
    const [updateTable, setUpdateTable] = React.useState("false");
    const update = (data) => {
        setUpdateTable(data);
    }

    return (
        <Grid container justifyContent="center" rowSpacing={2}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <Button update={update}/>
            </Grid>
            <Grid item xs={12}>
                <DataTable updateTable={updateTable}/>
            </Grid> 
        </Grid>
    );
}
