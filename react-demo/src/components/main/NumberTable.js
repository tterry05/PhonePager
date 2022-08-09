import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
export default function NumberTable(){

    const Number = [];

    function CreateData(phoneNumber){
        const UserData = {
            Phonenumber: phoneNumber,
            id: Math.random(),
            Date: new Date(),
        }
        Number.push(UserData);
        }
    CreateData('4143017099');
    CreateData('2623274089');
    CreateData('9998887766');
    CreateData('1234567890');
    

    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Number.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.Phonenumber}</TableCell>
                        <TableCell>{row.Date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}