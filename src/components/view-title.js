import React from "react";
import { useTranslation} from "react-i18next";
import {Box, Typography} from "@mui/material";

function ViewTitle({view}){
    const { t } = useTranslation();
    return(
        <Box>
            <Typography sx={{
                fontSize: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} color="text.secondary" gutterBottom>
                {t(view)}
            </Typography>

        </Box>
    )
}

export default ViewTitle;
