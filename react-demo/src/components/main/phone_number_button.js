import React, {useState} from 'react';
import { TextField, Button, Box } from '@mui/material';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../services/firebaseConfig';
import { getNumbers } from './NumberTable';

export default function PhoneNumberButton(){
    const [phoneNumber, setPhoneNumber] = React.useState('');
    initializeApp(firebaseConfig)
    const db = getFirestore()
    const number = {
        number: phoneNumber,
        date: new Date().toTimeString().substring(0, new Date().toTimeString().indexOf(' '))
    }
    const onClickHandler = () => {
        addDoc(collection(db, "numbers"), number)
        setPhoneNumber('')
    }
    
    return(
        <Box display="center" justifyContent="center" sx={{backgroundColor: 'white', height: '100px'}}>
            <TextField id="outlined-basic" label="Phone Number" value={phoneNumber} variant="outlined" sx={{height: '50px', marginTop: '25px'}} onChange={(event) => setPhoneNumber(event.target.value)}/>
            <Button variant="contained" onClick={onClickHandler} sx={{height: '50px',  marginTop: '27px'}}>Submit</Button>
        </Box>
    )
}
