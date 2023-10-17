import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function AccordionNormas(){
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return(
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1. Normas de la comunidad</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="cont-normas">
                    <Typography><strong>1. RESPETO, quien ofenda será baneado </strong>, con el resto de usuarios y moderadores. Los insultos y el acoso no será tolerado en este foro y el "estaba bromeando" no será una excusa válida.</Typography>
                    <Typography><strong>2. PROHIBIDO SPOILERS. </strong>(En disqus solo están permitidos mediante el uso de la etiqueta)</Typography>
                    <Typography><strong>3. PROHIBIDO, SPAMMING / TROLLING O FLOOD</strong>, aquí explicamos los tipos de spam / trolling que consideramos no apropiados</Typography>
                        <li>
                            <ul>- Postear contenido que no esté relacionado con la discusión en cuestión.</ul>
                            <ul>- Postear de manera repetitiva y no constructiva</ul>
                            <ul> - Spam excesivo de iconos y/o emojis</ul>
                            <ul>- Publicar varios "memes" en una misma discusión (3 o 4) sin gran relevancia o importancia</ul>
                        </li> 
                    <Typography><strong>4. NO ESTÁN PERMITIDOS LOS ENLACES EXTERNOS</strong>, No se permiten ningún tipo de enlace o referencias a contenido protegido por copyright.
                    </Typography>
                    <Typography><strong>5. PROHIBIDO CONTENIDO ADULTO</strong>, esto incluye:
                      <li>
                          <ul>- Contenido pornográfico de cualquier tipo incluido el Hentai.</ul>
                          <ul>- Representaciones en la vida real de sangre, muerte, actos horriblemente violentos, etc.</ul>
                          <ul>- Contenido que represente actos sexuales explícitos</ul>
                      </li>
                    </Typography>
                    <Typography><strong>6. PROHIBIDO CONTENIDO QUE INCITE AL ODIO</strong>, (también conocido como "hatespeech"): Esto incluye ataques contra otros usuarios basados en:
                    <li>
                        <ul>- Etnia / raza.</ul>
                        <ul>- Orientación sexual.</ul>
                        <ul>- Género.</ul>
                        <ul>- Religión.</ul>
                        <ul>- Política.</ul>
                    </li>
                    </Typography>
                    
                    <Typography><strong>7. PROHIBIDA LA FALSIFICACIÓN DE IDENTIDAD</strong>. Se tomarán acciones en situaciones donde algún miembro de la comunidad se haga pasar por:
                    <li>
                        <ul>- Otro miembro de la comunidad.</ul>
                        <ul>- Un moderador.</ul>
                        <ul>- Multicuentas (Las cuentas duplicadas serán directamente baneadas)</ul>
                    </li>
                    </Typography>
                </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} id='accordionbottom'>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2. Tipos de sancion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Los tiempos de sanción para el Chat y Disqus:
            <li>
              <ul><strong>- Primer aviso:</strong> 1 semana de sanción</ul>
              <ul><strong>- Segundo aviso:</strong> 1 mes</ul>
              <ul><strong>- Ultimo aviso:</strong> Ban permanente</ul>
              <li>
                <ul><strong>+ Multicuenta:</strong> Ban indefinido directo para la cuenta duplicada</ul>
              </li>
            </li>
          </Typography>
          <Typography>
            Por normal general este será el tiempo de sanción pero podrá ser mayor en función de la gravedad de este.
          </Typography>
          <Typography>
            *Alegar ignorancia o desconocimiento de las normas no excusa su cumplimiento
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}