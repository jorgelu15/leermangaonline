import * as React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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

export default function TabsCategory(props) {

  const { items, viewPerfil, setViewPerfil } = props;

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setViewPerfil(false);
  };

  return (
    <Box sx={{ width: '100%', marginBottom: 8 }}>
      <div className='cont-tabs'>
        <Tabs
          value={value}
          onClick={handleClick}
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
                <Tab label={item.tab} {...a11yProps(idx)}/>
              )
            }) : null
          }

          {/* <Tab label="Mangas" {...a11yProps(0)} />
          <Tab label="P.Manwas" {...a11yProps(1)} />
          <Tab label="P.Manhuas" {...a11yProps(2)} /> */}
        </Tabs>
      </div>
      
      { !viewPerfil ? 
        <div className='box-mangas-pf'>
          <div className='cont-tabs'>
          {
            items ? 
            items.cont.map((item, idx) => {
              return(
                
                <TabPanel value={value} index={idx} dir={theme.direction}>
                <h3 className='title'>Obras {item.tab}s</h3>
                <div className="sec-cards">
                  {
                    item.cards.length ?
                    item.cards.map((card)=>{
                      return (
                        <div className="cont-card">
                          <div className="card">
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
        </div>
        : null
      }
      
    </Box>
  );
}