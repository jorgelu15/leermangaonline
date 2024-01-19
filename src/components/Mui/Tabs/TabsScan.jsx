import * as React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabsScan(props) {

  const { items } = props;

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginBottom: 8 }}>
      <div className='cont-tabs'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {
            items ? 
            items.cont.map((item, idx) => {
              return (
                <Tab key={idx} label={item.tab} {...a11yProps(idx)}/>
              )
            }) : null
          }

        </Tabs>
      </div>
      
      <div style={{backgroundColor: '#e9eaed'}}>
        <div className='cont-tabs'>
          <div className='proyect'> 
        {
          items ? 
          items.cont.map((item, idx) => {
            return(
              
              <TabPanel key={idx} value={value} index={idx} dir={theme.direction}>
              <h3 className='title'>Proyectos {item.tab}</h3>
              <div className="sec-cards">
                {
                  item.cards.length ?
                  item.cards.map((card, idx)=>{
                    return (
                      <div key={idx} className="cont-card">
                        <div className="card" style={{backgroundImage: `url('${card.url}')`}}>
                        <div>
                          <p className="categoria">{card.categoria}</p>
                          <p className="calificacion">{card.calif}</p>
                        </div>
                        <p className="nombre">{card.nombre}</p>
                        </div>
                      </div>
                    )
                  }) :
                  <div>
                    <h4 className='mensaje'>No hay mangas</h4>
                  </div>
                }
              </div>
            </TabPanel>
            )
          }) : null
          
        }
        </div>
        { props.children }

        </div>
      </div>
        
      
    </Box>
  );
}