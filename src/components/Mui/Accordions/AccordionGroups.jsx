import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionGroups() {
  return (
    <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Filtros</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Genero
                <select name="" id="">
                    <option value="">Accion</option>
                    <option value="">Accion</option>
                    <option value="">Accion</option>
                    <option value="">Accion</option>
                    <option value="">Accion</option>
                </select>
            </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  );
}