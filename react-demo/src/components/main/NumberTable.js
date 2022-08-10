import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Grid, Typography, Paper } from '@mui/material';
export default function NumberTable(){

    function createData(num) {
        return { 
            phoneNumber: num,
            id: Math.random(),
            date: new Date().toTimeString().substring(0, new Date().toTimeString().indexOf(' ')),
         };
      }
      
      const rows = [
        createData('4143017099'),
      ];
      
      console.log(rows[0].date);
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
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.id}
                      sx={
                        index % 2
                          ? { background: '#eeeeee' }
                          : { background: 'white' }
                      }
                    >
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.phoneNumber}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">*Delete Placeholder*</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        );
      }