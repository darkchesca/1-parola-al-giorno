import React, {useState} from "react";
import Greetings from "../components/greetings";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";

const words = require('../words.json');

// todo make it word of the day with timeout
// add learn words to blacklist

function Words(){
    const [showCard, setShowCard] = useState(false);
    const [word, setWord] = useState({
        original:'',
        english: ''
    });

    const onTypeClick = (type) => {
        const wordsGroup = words[type];
        const newWord = wordsGroup[Math.floor(Math.random()*wordsGroup.length)];
        setWord(newWord);

        setShowCard(true)
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
                    Nome
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
                    Verbo
                </Button>
            </div>
            <Box
                sx={{
                    minHeight:'150px'
                }}
            >
                {showCard && <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Parola del giorno
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div">
                            {word.original}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div">
                            {word.english}
                        </Typography>
                    </CardContent>
                </Card>}
            </Box>
        </div>
    )
}

export default Words;
