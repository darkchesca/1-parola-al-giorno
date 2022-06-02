import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DeleteOutline} from "@mui/icons-material";

const rows = [
    {
        word: 'Parola 1',
        english: 'Words 1',
        type: 'verbo',
    },{
        word: 'Parola 2',
        english: 'Words 2',
        type: 'verbo',
    },{
        word: 'Parola 3',
        english: 'Words 3',
        type: 'verbo',
    },{
        word: 'Parola 4',
        english: 'Words 3',
        type: 'verbo',
    },{
        word: 'Parola 5',
        english: 'Words 3',
        type: 'verbo',
    },{
        word: 'Parola 6',
        english: 'Words 3',
        type: 'verbo',
    },{
        word: 'Parola 7',
        english: 'Words 3',
        type: 'verbo',
    },{
        word: 'Parola 8',
        english: 'Words 3',
        type: 'verbo',
    },{
        word: 'Parola 9',
        english: 'Words 3',
        type: 'verbo',
    },
]

function History(){
    const ls = localStorage.wordsHistory ? localStorage.wordsHistory : '[]'
    const localStorageHistory = JSON.parse(ls);
    return (
        <div className="history-container">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Word</TableCell>
                                <TableCell align="right">Translation</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {localStorageHistory.map((row) => (
                                <TableRow
                                    key={row.original}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.original}
                                    </TableCell>
                                    <TableCell align="right">{row.english}</TableCell>
                                    <TableCell align="right">{row.type}</TableCell>
                                    <TableCell align="right"><DeleteOutline/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default History;
