import React from 'react';
import {AppBar, Box, Tab, Tabs, useTheme} from "@mui/material";
import Bars from "../charts/Bars.jsx";
import Radar from "../charts/Radar.jsx";
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import RadarIcon from '@mui/icons-material/Radar';


function DataTabs({data}) {

    const theme = useTheme();
    const [value, setValue] = React.useState(0); // track active tab. default = first tab
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // paper: container for displaying content on an elevated surface
    return (
        <Box sx={{bgcolor: 'background.paper'}}>
            <AppBar position="static">
                <Tabs
                    value={value} // current active tab index
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab icon={<BarChartSharpIcon />} iconPosition={"start"} label="Bar Chart" {...a11yProps(0)} />
                    <Tab icon={<RadarIcon />} iconPosition={"start"} label="Rader Chart" {...a11yProps(1)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Bars data={data}/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Radar data={data}/>
            </TabPanel>
        </Box>
    );
}


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index} // hides content if not active
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (  // render when active
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

// accessibility
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default DataTabs;

