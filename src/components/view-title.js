import React from 'react';
import { Box, Typography } from '@mui/material';

const ViewTitle = ({ view }) => (
    <Box>
        <Typography
            sx={{
                fontSize: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            color="text.secondary"
            gutterBottom
        >
            {view}
        </Typography>

    </Box>
);

export default ViewTitle;
