import React, {useState} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RestoreIcon from "@mui/icons-material/Restore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import {useNavigate} from "react-router-dom";
import {Grid, Tooltip} from "@mui/material";

const tabs = [
    {
        value: 'history',
        label: 'History',
        icon: <RestoreIcon />,
    },{
        value: '/',
        label: 'Words',
        icon: <MenuBookIcon />,
    },{
        value: 'settings',
        label: 'Settings',
        icon: <SettingsApplicationsIcon />,
    },
]

function Navigation(){
    const navigate = useNavigate();
    const [value, setValue] = useState('/');

    const onNavigationChange = (e, newValue) => {
        setValue(newValue);
        navigate(`${newValue}`);
    }
    return(
        <Grid sx={{display: 'flex', justifyContent: 'center'}}>
            <Tabs
                value={value}
                onChange={onNavigationChange}
            >
                {tabs.map((tab) => (<Tab
                    key={tab.value}
                    value={tab.value}
                    icon={<Tooltip
                        title={tab.label}>
                        {tab.icon}
                    </Tooltip>}
                />))}
            </Tabs>
        </Grid>
    )
}

export default Navigation;
