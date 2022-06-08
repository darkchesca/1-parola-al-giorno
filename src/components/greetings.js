import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Greetings = () => {
    const { t } = useTranslation();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        // on component mount set random greeting
        const randomGreeting = [
            t('nice_butt'),
            t('believe_love_first_sight'),
            t('do_you_have_compass'),
            t('nice_legs_what_time_open'),
            t('we_are_not_socs'),
            t('did_the_sun_come_out_or_smile'),
            t('come_out_oven_hot'),
            t('are_you_magician_everyone_disappear'),
            t('are_you_camera_smile'),
            t('extra_heart_mine_stolen'),
        ];
        setGreeting(randomGreeting[Math.floor(Math.random() * randomGreeting.length)]);
    }, []);

    return (
        <Box>
            <Typography
                sx={{
                    fontSize: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                color="text.secondary"
                gutterBottom
            >
                {t('hello', { name: 'Ike' })}
                {' '}
                <FavoriteIcon color="error" />
            </Typography>
            <Typography
                sx={{
                    fontSize: 14,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100px',
                    width: '300px',
                }}
                color="text.secondary"
                gutterBottom
            >
                {greeting}
            </Typography>
        </Box>
    );
};

export default Greetings;
