import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import Greetings from "../components/greetings";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";

const words = require('../words.json');



function Words(){
    const { t } = useTranslation();
    // show/ hide word card
    const [showCard, setShowCard] = useState(false);
    const [word, setWord] = useState({
        original:'',
        english: '',
        type: '',
    });

    // on noun/ verb click pick random word from words array, based on type
    const onTypeClick = (type) => {
        const wordsGroup = words[type];
        let newWord = wordsGroup[Math.floor(Math.random()*wordsGroup.length)];
        newWord["type"] = type;
        setWord(newWord);

        setShowCard(true)
    }

    // save word to local storage
    const onSaveToHistoryClick = () => {
        const oldLocalStorage = localStorage.wordsHistory
            ? JSON.parse(localStorage.wordsHistory)
            : [];
        const wordsHistory = [...oldLocalStorage, word];
        localStorage.wordsHistory = JSON.stringify(wordsHistory);

    }
    return (
        <div className="words-container"
             style={{
                 textAlign: 'center'
             }}
        >
            <Greetings />
            <div>
                <Button
                    variant="contained"
                    color="info"
                    size="sm"
                    sx={{
                        m: 2,
                    }}
                    onClick={()=>onTypeClick('nouns')}
                >
                    {t('noun')}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="sm"
                    sx={{
                        m: 2,
                    }}
                    onClick={()=>onTypeClick('verbs')}
                >
                    {t('verb')}
                </Button>
            </div>
            <Box
                sx={{
                    minHeight:'150px'
                }}
            >
                {showCard && <div>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {t('how_about')}
                            </Typography>
                            <Typography variant="h5" color="text.secondary" component="div">
                                {word.original}
                            </Typography>
                            <Typography variant="h5" color="text.secondary" component="div">
                                {word.english}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button
                        variant="contained"
                        color="success"
                        size="sm"
                        sx={{
                            m: 2,
                        }}
                        onClick={()=>onSaveToHistoryClick()}
                    >
                        {t('save_to_history')}
                    </Button>
                </div>}
            </Box>
        </div>
    )
}

export default Words;
