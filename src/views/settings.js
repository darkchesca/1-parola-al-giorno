import React, {useState} from "react";
import {Box, Button, TextField} from "@mui/material";

function Settings(){
    const [name, setName] = useState(localStorage.getItem('name') || '');

    const onNameChange = (e) => {
        console.log("val", e.target.value);
        setName(e.target.value);
    }

    const onNameChangeConfirm = () => {
        localStorage.setItem('name', name) ;
    }

    const onChangeDiscard = () => {
        setName(localStorage.name);
    }
    return (
        <Box
            component="form"
            sx={{
                    m: 1,
                    width: '25ch',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center'
            }}
            noValidate
            autoComplete="off"
        >
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

        </Box>
    )
}

export default Settings;
