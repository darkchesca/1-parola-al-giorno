import React from "react";
import {Box, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Greetings(){
    return(
        <Box>
            <Typography sx={{
                fontSize: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} color="text.secondary" gutterBottom>
                Ciao Ike <FavoriteIcon color="error" />
            </Typography>
            <Typography sx={{
                fontSize: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} color="text.secondary" gutterBottom>
                Scegli una parola
            </Typography>
        </Box>
    )
}

export default Greetings;
