import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import routes from '../../../helpers/routes';

export default function AccordionFooter() {
  return (
    <div>
      <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sitio Web</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li><Link to={routes.terms}>Sobre LeerMangaOnline</Link></li>
              <li><Link to={routes.terms}>Preguntas Frecuentes</Link></li>
              <li><Link to={routes.terms}>Manual de Uso</Link></li>
              <li><Link to={routes.terms}>Normas de la Comunidad</Link></li>
              <li><Link to={routes.terms}>Terminos de Uso</Link></li>
              <li><Link to={routes.terms}>Politica de Privacidad</Link></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Explorar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li><Link to={routes.directory}>Biblioteca</Link></li>
              <li><Link to={routes.groups}>Grupos</Link></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Contenidos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>LeerMangaOnline no realiza las traducciones aqui realizadas
              y solo es un repositorio con visor propio para que distintos
              grupos de traduccion puedan compartir de forma publica y
              organizada para el disfrute de todos.
            </p>
            <p>
              This site is protected by reCAPTCHA and the Google Privacy
              and Terms of Service apply.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}