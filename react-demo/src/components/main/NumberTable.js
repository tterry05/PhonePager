import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Grid, Typography, Paper } from '@mui/material';
export default function NumberTable(){

    function createData(num) {
        return { 
            phoneNumber: num,
            id: Math.random(),
         };
      }
      
      const rows = [
        createData('4143017099'),
      ];
      

        return (
            <TableContainer
              component={Paper}
              align="center"
              sx={{
                backgroundColor: '#3764A8',
                color: 'white',
                fontSize: 'large',
                margin: 'auto',
              }}
            >
              <Table aria-label="customized table">
                <TableHead
                  sx={{
                    backgroundColor: '#3764A8',
                    color: 'white',
                    fontSize: 'large',
                  }}
                >
                  <TableRow
                    sx={{
                      backgroundColor: '#3764A8',
                      color: 'white',
                      fontSize: 'large',
                    }}
                  >
                    <TableCell
                      align="left"
                      sx={{
                        color: 'white',
                        fontSize: 'large',
                      }}
                    >
                      <Grid container>
                        <Grid item xs={6} />
                        <Grid item xs={2}>
                          Phone #
                        </Grid>
                      </Grid>
                    </TableCell>
      
                    <TableCell
                      align="left"
                      sx={{
                        color: 'white',
                        fontSize: 'large',
                      }}
                    >
                      ID
                    </TableCell>
      
                    <TableCell
                      align="left"
                      sx={{
                        color: 'white',
                        fontSize: 'large',
                      }}
                    >
                      Date
                    </TableCell>
      
                    <TableCell
                      align="left"
                      sx={{
                        color: 'white',
                        fontSize: 'large',
                      }}
                    >
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        );
      }