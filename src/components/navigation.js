import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RestoreIcon from "@mui/icons-material/Restore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import {useNavigate} from "react-router-dom";
import {AppBar, Tooltip} from "@mui/material";
import ViewTitle from "./view-title";

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
    const { t } = useTranslation();
    const [value, setValue] = useState('/');

    const titleObjs = {
        'history': t('saved_words'),
        '/': t('home'),
        'settings': t('settings'),
    }

    const [title, setTitle] = useState(titleObjs['/']);

    const onNavigationChange = (e, newValue) => {
        setValue(newValue);
        setTitle(titleObjs[newValue]);
        navigate(`${newValue}`);
    }

    useEffect(() => {
        navigate('/');
    },[])

    return(
        <React.Fragment>
            <AppBar
                position="sticky"
                sx={{display: 'flex', alignItems: 'center', backgroundColor: 'transparent'}}
            >
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
            </AppBar>
            <ViewTitle view={title} />
        </React.Fragment>
    )
}

export default Navigation;
