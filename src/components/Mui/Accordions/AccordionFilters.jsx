import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export default function AccordionFilters(props) {

  const {
    filters,
    setFilters
  } = props;

  const handleFilter = (e) => {

    let ind = filters.indexOf(e.target.value)
    if(ind === -1){
      setFilters([...filters, e.target.value])
    }
    else{
      let auxFilters = filters.slice();
      auxFilters.splice(ind, 1) 
      setFilters(auxFilters)
    }
    
  }

  return (
    <div>
      <Accordion sx={{backgroundColor: "transparent", color: "white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Genero</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <FormGroup>
              <FormControlLabel control={<Checkbox value="accion" onChange={handleFilter}/>} label="Accion" />
              <FormControlLabel control={<Checkbox value="aventura" onChange={handleFilter}/>} label="Aventura" />
              <FormControlLabel control={<Checkbox value="comedia" onChange={handleFilter}/>} label="Comedia" />
              <FormControlLabel control={<Checkbox value="drama" onChange={handleFilter}/>} label="Drama" />
              <FormControlLabel control={<Checkbox value="recuentos" onChange={handleFilter}/>} label="Recuentos de la vida" />
              <FormControlLabel control={<Checkbox value="ecchi" onChange={handleFilter}/>} label="Ecchi" />
              <FormControlLabel control={<Checkbox value="fantasia" onChange={handleFilter}/>} label="Fantasia" />
              <FormControlLabel control={<Checkbox value="magia" onChange={handleFilter}/>} label="Magia" />
            </FormGroup>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "transparent", color: "white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Tipo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <FormGroup>
              <FormControlLabel control={<Checkbox value="manga" onChange={handleFilter}/>} label="Manga" />
              <FormControlLabel control={<Checkbox value="manhua" onChange={handleFilter}/>} label="Manhua" />
              <FormControlLabel control={<Checkbox value="manhwa" onChange={handleFilter}/>} label="Manhwa" />
              <FormControlLabel control={<Checkbox value="novela" onChange={handleFilter}/>} label="Novela" />
              <FormControlLabel control={<Checkbox value="one shot" onChange={handleFilter}/>} label="One shot" />
              <FormControlLabel control={<Checkbox value="doujinshi" onChange={handleFilter}/>} label="Doujinshi" />
              <FormControlLabel control={<Checkbox value="oel" onChange={handleFilter}/>} label="Oel" />
            </FormGroup>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "transparent", color: "white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Demografia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <FormGroup>
              <FormControlLabel control={<Checkbox value="seinin" onChange={handleFilter}/>} label="Seinin" />
              <FormControlLabel control={<Checkbox value="shoujo" onChange={handleFilter}/>} label="Shoujo" />
              <FormControlLabel control={<Checkbox value="shounen" onChange={handleFilter}/>} label="Shounen" />
              <FormControlLabel control={<Checkbox value="josei" onChange={handleFilter}/>} label="Josei" />
              <FormControlLabel control={<Checkbox value="kodomo" onChange={handleFilter}/>} label="Kodomo" />
            </FormGroup>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}