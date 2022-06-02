import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import Greetings from "../components/greetings";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";

const words = require('../words.json');



function Words(){
    const { t } = useTranslation();
    const wordEmptyObj = {
        original:'',
        english: '',
        type: '',
    }
    // show/ hide word card
    const [showCard, setShowCard] = useState(false);
    const [type, setType] = useState('')
    const [word, setWord] = useState(wordEmptyObj);

    // on type click pick random word from words array, based on type
    const onTypeClick = (newType) => {
        setType(newType);

        // get filteredWords from localStorage (array with words that have not been saved to history yet)
        const oldAvailableWords = localStorage.availableWords
            ? JSON.parse(localStorage.availableWords)
            : words;

        // isolate array for chosen words group
        const wordsGroup = oldAvailableWords[newType];
        // if there are words left in the array
        if(wordsGroup.length){
            // pick a random one and show it
            let newWord = wordsGroup[Math.floor(Math.random()*wordsGroup.length)];
            newWord["type"] = newType;
            setWord(newWord);
            setShowCard(true);
        } else {
            // show modal: no words left for this group.
            alert(t('no_words_left_type', {type}));
        }

    }

    // save word to local storage
    const onSaveToHistoryClick = () => {
        // get localStorage wordsHistory
        const oldWordsHistory = localStorage.wordsHistory
            ? JSON.parse(localStorage.wordsHistory)
            : [];
        // add word to history
        const wordsHistory = [...oldWordsHistory, word];
        localStorage.wordsHistory = JSON.stringify(wordsHistory);

        // get localStorage words array without the words that are in the history
        let oldAvailableWords = localStorage.availableWords
            ? JSON.parse(localStorage.availableWords)
            : words;

        // delete word from array of available words
        const newAvailableWords = oldAvailableWords[type].filter(w => {
            return w.original !== word.original
        });
        oldAvailableWords[type] = newAvailableWords;
        localStorage.availableWords = JSON.stringify(oldAvailableWords);
        setWord(wordEmptyObj);

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
                    <Card variant="outlined" sx={{
                        minHeight:'120px'
                    }}>
                        {word.original !== ''
                            ? <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    {t('how_about')}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                    {word.original}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                    {word.english}
                                </Typography>
                            </CardContent>
                            : <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    {t('word_saved')}
                                </Typography>
                        </CardContent>}
                    </Card>
                    <Button
                        disabled={word.original === ''}
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
