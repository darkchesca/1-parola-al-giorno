import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import i18next from 'i18next';

const Settings = () => {
    const { t } = useTranslation();
    const [lang, setLang] = useState(i18next.language);
    // const [name, setName] = useState(localStorage.getItem('name') || '');

    const onLangChange = (e) => {
        const val = e.target.value;
        setLang(val);
        i18next.changeLanguage(val);
    };

    /* const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onNameChangeConfirm = () => {
        localStorage.setItem('name', name);
    };

    const onChangeDiscard = () => {
        setName(localStorage.name);
    }; */

    return (
        <Box
            sx={{
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <FormControl sx={{ m: 1 }}>
                    <InputLabel id="language-select">{t('language')}</InputLabel>
                    <Select
                        color="primary"
                        labelId="language-select"
                        id="language-select"
                        value={lang}
                        label={t('language')}
                        onChange={onLangChange}
                    >
                        <MenuItem value="it">{t('it')}</MenuItem>
                        <MenuItem value="en">{t('en')}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {/* <Box sx={{
            m: 1,
            width: '25ch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
          <TextField
            id="name"
            label="Change Name"
            variant="outlined"
            value={name}
            onChange={onNameChange}
            sx={{
              m: 2,
            }}
          />
          <div>
            <Button
              variant="contained"
              color="success"
              size="sm"
              onClick={onNameChangeConfirm}
              disabled={name === localStorage.name}
              sx={{
                m: 2,
              }}
            >
              OK
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={onChangeDiscard}
              disabled={name === localStorage.name}
              sx={{
                m: 2,
              }}
            >
              Ko
            </Button>
          </div>
        </Box> */}

        </Box>
    );
};

export default Settings;
