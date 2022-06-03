import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import Greetings from "../components/greetings";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";

import useLocalStorage from "../utils/hooks/use-local-storage";

const words = require('../words.json');



function Words(){
    const { t } = useTranslation();
    // localStorage available words
    const [ availableWords, setAvailableWords ] = useLocalStorage('availableWords', words);
    // localStorage saved words
    const [ wordsHistory, setWordsHistory ] = useLocalStorage('wordsHistory', []);
    const wordEmptyObj = {
        original:'',
        english: '',
        type: '',
    }
    // show/ hide word card
    const [showCard, setShowCard] = useState(false);
    const [type, setType] = useState('');
    const [word, setWord] = useState(wordEmptyObj);
    const [emptyCardText, setEmptyCardText] = useState('')

    // on type click pick random word from words array, based on type
    const onTypeClick = (newType) => {
        setType(newType);

        // get filteredWords from localStorage (array with words that have not been saved to history yet)
        /*const oldAvailableWords = localStorage.availableWords
            ? JSON.parse(localStorage.availableWords)
            : words;*/

        // isolate array for chosen words group
        const wordsGroup = availableWords[newType];
        // if there are words left in the array
        if(wordsGroup.length){
            // pick a random one and show it
            let newWord = wordsGroup[Math.floor(Math.random()*wordsGroup.length)];
            newWord["type"] = newType;
            setWord(newWord);
            setShowCard(true);
        } else {
            // show message: no words left for this group.
            setWord(wordEmptyObj);
            setEmptyCardText(t('no_words_left_type', {type}));
        }

    }

    // save word to local storage
    const onSaveToHistoryClick = () => {
        // add word to history in ls
        const wordsHistoryNew = [...wordsHistory, word];
        setWordsHistory(wordsHistoryNew);

        // get localStorage words array without the words that are in the history
        let oldAvailableWords = availableWords;

        // delete word from array of available words
        const newAvailableWords = oldAvailableWords[type].filter(w => {
            return w.original !== word.original
        });
        oldAvailableWords[type] = newAvailableWords;
        setAvailableWords(oldAvailableWords);
        setWord(wordEmptyObj);
        setEmptyCardText(t('word_saved'));

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
                    variant="outlined"
                    color="primary"
                    size="sm"
                    sx={{
                        m: 2,
                    }}
                    onClick={()=>onTypeClick('nouns')}
                >
                    {t('noun')}
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
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
                        minHeight:'140px'
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
                                    {emptyCardText}
                                </Typography>
                        </CardContent>}
                    </Card>
                    <Button
                        disabled={word.original === ''}
                        variant="outlined"
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
