import React from "react";
import {Box, Typography} from "@mui/material";

function ViewTitle({view}){
    return(
        <Box>
            <Typography sx={{
                fontSize: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} color="text.secondary" gutterBottom>
                {view}
            </Typography>

        </Box>
    )
}

export default ViewTitle;
