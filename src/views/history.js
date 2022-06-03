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
import words from "../words.json";
import useLocalStorage from "../utils/hooks/use-local-storage";

function History(){
    const { t } = useTranslation();
    // localStorage available words
    const [ availableWords, setAvailableWords ] = useLocalStorage('availableWords', words);
    // localStorage saved words
    const [ wordsHistory, setWordsHistory ] = useLocalStorage('wordsHistory', []);

    const onDeleteClick = (word) => {
        // delete from displayed array
        const newHistory = wordsHistory.filter((w) => w.original !== word.original);
        // update localStorageHistory
        setWordsHistory(newHistory);

        // update ls availableWords
        const type = word.type
        const refactoredWord = {
            original: word.original,
            english: word.english,
        }
        let oldAvailableWords = availableWords

        // add word to available words
        const arrayType = [...oldAvailableWords[type], refactoredWord];
        oldAvailableWords[type] = arrayType;
        setAvailableWords(oldAvailableWords);
    }
    return (
        <div className="history-container">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 550, width: 330 }}>
                    <Table size="small" stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t('word')}</TableCell>
                                <TableCell>{t('english')}</TableCell>
                                <TableCell align="right">{t('delete')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {wordsHistory.map((row, index) => (
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
