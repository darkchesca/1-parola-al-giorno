import React from "react";
import { useTranslation} from "react-i18next";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DeleteOutline} from "@mui/icons-material";


function History(){
    const { t } = useTranslation();
    const ls = localStorage.wordsHistory ? localStorage.wordsHistory : '[]'
    const localStorageHistory = JSON.parse(ls);
    return (
        <div className="history-container">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 550 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t('word')}</TableCell>
                                <TableCell>{t('english')}</TableCell>
                                <TableCell>{t('category')}</TableCell>
                                <TableCell align="right">{t('delete')}</TableCell>
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
                                    <TableCell align="left">{row.english}</TableCell>
                                    <TableCell align="left">{row.type}</TableCell>
                                    <TableCell align="right"><DeleteOutline color="error"/></TableCell>
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
