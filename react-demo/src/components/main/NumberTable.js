import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Grid, Typography, Paper } from '@mui/material';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
export default function NumberTable(){
  const firebaseConfig = {
    apiKey: "AIzaSyDer3pj47n5rcN2zoQQCtAPvbhac5HbUF0",
    authDomain: "phone-pager.firebaseapp.com",
    databaseURL: "https://phone-pager-default-rtdb.firebaseio.com",
    projectId: "phone-pager",
    storageBucket: "phone-pager.appspot.com",
    messagingSenderId: "614291515117",
    appId: "1:614291515117:web:8cc783e9f07db80c258ee4",
    measurementId: "G-ZLZ1FLFD3H"
  };
  // init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'numbers')
let numbers = [];
// get collection data
getDocs(colRef).then(snapshot => {
    snapshot.docs.forEach(doc => {
      numbers.push({ ...doc.data(), id: doc.id })
    })
  })
  .catch(err => {
    console.log(err.message)
  })
  console.log(numbers)
  let num = [
    {
      id: '1',
      number: '+1 (555) 555-5555',
      status: 'active'
    }
  ]
  console.log(num)
  console.log(num[0].number)

        return (
            <TableContainer
              component={Paper}
              align="center"
            >
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      Phone #
                    </TableCell>
                    <TableCell align="left">
                      ID
                    </TableCell>
                    <TableCell align="left">
                      Date
                    </TableCell>
                    <TableCell align="left">
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {numbers.map((row, index) => (
                    <TableRow
                      key={row.id}
                      sx={
                        index % 2
                          ? { background: '#eeeeee' }
                          : { background: 'white' }
                      }
                    >
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.phonenumber}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">*Delete Placeholder*</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        );
      }