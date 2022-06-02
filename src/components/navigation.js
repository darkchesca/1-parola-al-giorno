import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Box, Grid} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import {useNavigate} from "react-router-dom";

function Navigation(){
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const onNavigationChange = (e, newValue) => {
        setValue(newValue);
        navigate(`${newValue}`);
    }
    return(
        <Grid>
            <BottomNavigation
                showLabels
                value={value}
                onChange={onNavigationChange}
            >
                <BottomNavigationAction
                    value="history"
                    label="History"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    value="/"
                    label="Words"
                    icon={<MenuBookIcon />}
                />
                <BottomNavigationAction
                    value="settings"
                    label="Settings"
                    icon={<SettingsApplicationsIcon />}
                />
            </BottomNavigation>
        </Grid>
    )
}

export default Navigation;
