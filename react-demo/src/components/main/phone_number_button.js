import React, {useState} from 'react';
import { TextField, Button, Box } from '@mui/material';
export default function PhoneNumberButton(){
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const onClickHandler = () => {
        console.log(phoneNumber);
    }
    
    return(
        <Box display="center" justifyContent="center" sx={{backgroundColor: 'white', height: '100px'}}>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{height: '50px', marginTop: '25px'}} onChange={(event) => setPhoneNumber(event.target.value)}/>
            <Button variant="contained" onClick={onClickHandler} sx={{height: '50px',  marginTop: '27px'}}>Submit</Button>
        </Box>
    )
}