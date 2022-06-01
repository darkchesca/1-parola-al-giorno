import React from "react";
import { useTranslation} from "react-i18next";
import {Box, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Greetings(){
    const { t } = useTranslation()
    return(
        <Box>
            <Typography sx={{
                fontSize: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} color="text.secondary" gutterBottom>
                {t('greetings:hello', { name: 'Ike'})} <FavoriteIcon color="error" />
            </Typography>
            <Typography sx={{
                fontSize: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} color="text.secondary" gutterBottom>
                {t('greetings:choose_type')}
            </Typography>
        </Box>
    )
}

export default Greetings;
