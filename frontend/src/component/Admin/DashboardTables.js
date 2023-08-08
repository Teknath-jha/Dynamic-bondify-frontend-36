import React from 'react';
import { Grid, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Button } from '@material-ui/core';

import { useNavigate } from "react-router-dom";

const DashboardTables = ({ postMaturedData, securitiesData }) => {
    const postMaturedHeaders = Object.keys(postMaturedData[0]);
    const securitesHeaders = Object.keys(securitiesData[0]);
    const navigate = useNavigate();


    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper elevation={3}>
                <h2 align="center">Post Matured Security</h2>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {postMaturedHeaders.map(header => (
                                        <TableCell key={header}>{header}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {postMaturedData.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {postMaturedHeaders.map(header => (
                                            <TableCell key={header}>{row[header]}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button >Show All</Button>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={3}>
                    <h2 align="center">Securities</h2>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {securitesHeaders.map(header => (
                                        <TableCell key={header}>{header}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {securitiesData.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {securitesHeaders.map(header => (
                                            <TableCell key={header}>{row[header]}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button>Show All</Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DashboardTables;
