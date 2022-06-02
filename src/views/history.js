import React, {useState} from "react";
import { useTranslation} from "react-i18next";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DeleteOutline} from "@mui/icons-material";
import words from "../words.json";

function History(){
    const { t } = useTranslation();
    const ls = localStorage.wordsHistory ? localStorage.wordsHistory : '[]';
    const [localStorageHistory, setLocalStorageHistory] = useState(JSON.parse(ls));

    const onDeleteClick = (word, index) => {
        // delete from displayed array
        const newHistory = localStorageHistory.filter((w) => w.original !== word.original);
        setLocalStorageHistory(newHistory);
        // update localStorageHistory
        localStorage.wordsHistory = JSON.stringify(newHistory);

        // update ls availableWords
        const type = word.type
        const refactoredWord = {
            original: word.original,
            english: word.english,
        }
        let oldAvailableWords = localStorage.availableWords
            ? JSON.parse(localStorage.availableWords)
            : words;

        // add word to available words
        const arrayType = [...oldAvailableWords[type], refactoredWord];
        oldAvailableWords[type] = arrayType;
        localStorage.availableWords = JSON.stringify(oldAvailableWords);
    }
    return (
        <div className="history-container">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 550, width: 350 }}>
                    <Table size="small" stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t('word')}</TableCell>
                                <TableCell>{t('english')}</TableCell>
                                <TableCell align="right">{t('delete')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {localStorageHistory.map((row, index) => (
                                <TableRow
                                    key={row.original}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.original}
                                    </TableCell>
                                    <TableCell align="left">{row.english}</TableCell>
                                    <TableCell align="right">
                                        <DeleteOutline
                                            color="error"
                                            onClick={()=>onDeleteClick(row, index)}
                                        />
                                    </TableCell>
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
