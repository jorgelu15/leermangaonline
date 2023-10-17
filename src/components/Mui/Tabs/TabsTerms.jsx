import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AccordionPolitics from '../Accordions/AccordionPolitics'
import AccordionNormas from '../Accordions/AccordionNormas';
import AccordionTerms from '../Accordions/AccordionTerms';

export default function TermTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '1280px', typography: 'body1',margin: 'auto' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant='scrollable'>
            <Tab label="Terminos y Condiciones" value="1" sx={{color: 'white'}}/>
            <Tab label="Politicas de privacidad" value="2" sx={{color: 'white'}}/>
            <Tab label="Normas de la comunidad" value="3" sx={{color: 'white'}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className='container'>
            <div className='cont-terms'>
                <h2>Terminos de servicio</h2>
                <hr/>
                <div>
                    <AccordionTerms></AccordionTerms>
                </div>
            </div>
        </div></TabPanel>
        <TabPanel value="2">
          <div className='container'>
            <div className='cont-terms'>
                <h2>Politicas de privacidad</h2>
                <hr/>
                <div>
                    <AccordionPolitics></AccordionPolitics>
                </div>
            </div>
        </div></TabPanel>
        <TabPanel value="3">
          <div className='container'>
            <div className='cont-terms'>
                <h2>Normas de la comunidad</h2>
                <hr/>
                <AccordionNormas/>
            </div>
        </div></TabPanel>
      </TabContext>
    </Box>
  );
}