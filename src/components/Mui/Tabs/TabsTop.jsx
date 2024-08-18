import * as React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useText } from '../../../hooks/useText';
import routes from '../../../helpers/routes';


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

export default function TabsTop(props) {

  const { items } = props;
  const { reemplazarEspaciosConGuiones } = useText();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: '100%', marginBottom: 8 }}>
      <div style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {
            items?.cont.map((item, idx) => {
              return (
                <Tab key={idx} label={item.tab} {...a11yProps(idx)} />
              )
            })
          }

        </Tabs>
      </div>

      {
        items?.cont?.map((item, idx) => {
          return (
            <TabPanel key={idx} value={value} index={idx} dir={theme.direction}>
              <div style={{ paddingLeft: 50 }}>
                {
                  item?.cards?.map((card, idx) => {
                    return (
                      <Link to={routes.manga + `/${card.serie_uid}/${reemplazarEspaciosConGuiones(card.nombre.toLowerCase())}`} className="card" key={idx}>
                        <div className="cont-img" style={{ backgroundImage: `url('http://upload.leermangaonline.com/uploads/obras/${card.portada}')` }}>
                          <p>{idx + 1}</p>
                        </div>
                        <div className="info">
                          <p className="nombre">{card.nombre}</p>
                          <p className="categoria">{card.demografia}</p>
                        </div>
                      </Link >
                    )
                  })
                }
              </div>
            </TabPanel>
          )
        })
      }

    </Box>
  );
}