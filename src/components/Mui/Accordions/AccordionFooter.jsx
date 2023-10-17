import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionFooter() {
  return (
    <div>
      <Accordion sx={{backgroundColor: "transparent", color: "white"}}>
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
                <li><a href="#">Sobre LeerMangaOnline</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Manual de Uso</a></li>
                <li><a href="#">Colaborar</a></li>
                <li><a href="#">Normas de la Comunidad</a></li>
                <li><a href="#">Terminos de Uso</a></li>
                <li><a href="#">Politica de Privacidad</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "transparent", color: "white"}}>
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
                <li><a href="#">Biblioteca</a></li>
                <li><a href="#">Grupos</a></li>
                <li><a href="#">Listas</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "transparent", color: "white"}}>
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