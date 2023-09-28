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

export default function TermsAccordion() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1. Introduccion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Los presentes Términos de Uso (referidos en adelante como “Términos”) se aplican a todas las acciones que realicen los usuarios al hacer uso de los servicios administrados por MediBang Inc. (referido en adelante como “nosotros”).
          </Typography>
          <Typography>
            2. Los presentes Términos tienen como propósito regular las condiciones de uso de nuestros servicios. Los usuarios deben cumplir con lo estipulado en los presentes Términos.
          </Typography>
          <Typography>
            3. En el caso de usuarios que sean menores de edad, para hacer uso de nuestros servicios deben obtener previamente el consentimiento de sus progenitores, cuidadores o tutores. Así mismo, aún después de que alcance la mayoría de edad un usuario que era menor de edad al momento de haber dado el consentimiento a los presentes Términos, se considerará que su consentimiento inicial sigue siendo vigente.
          </Typography>
          <Typography>
            4. Cuando un usuario haga uso de nuestros servicios para una empresa u organización, debe asegurarse de que dicha empresa u organización también dé el consentimiento a los presentes Términos.
          </Typography>
          <Typography>
            5. Con tan solo que un usuario haga uso de nuestros servicios, se considerará que ha dado su consentimiento a todos los presentes Términos. Por consiguiente, les solicitamos encarecidamente a todos los usuarios que lean por completo los presentes Términos antes de empezar a utilizar nuestros servicios.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2. Definiciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>3. Ambito de aplicacion de los presentes terminos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Se establece que, todos los demás términos de uso aparte de los presentes Términos (ya sea que se denominen como “reglamento”, “lineamiento”, “política” o cualquier otro término) que nosotros indiquemos en el presente sitio, nuestros servicios, sitio relacionado y/o servicios relacionados, forman parte de los presentes Términos.
          </Typography>
          <Typography>
            2. En caso de que haya discrepancia entre un enunciado de los presentes Términos y los demás términos de uso mencionados en el párrafo anterior, prevalecerá lo establecido en los demás términos de uso correspondientes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>4. Modificiacion de los terminos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Nosotros podemos modificar los Términos en cualquier momento que lo consideremos necesario y sin previo aviso.
          </Typography>
          <Typography>
            2. Las modificaciones en los Términos empezarán a tener vigencia desde el mismo momento en que sean publicadas en el presente sitio y/o en nuestros servicios, excepto en los casos en que establezcamos otras condiciones.
          </Typography>
          <Typography>
            3. Cuando un usuario hace uso de nuestros servicios después de que las modificaciones de los Términos hayan entrado en vigencia, se considerará que dicho usuario ha dado su consentimiento a todas las cláusulas de la versión más reciente de los Términos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>5. Tratamiento de la informacion personal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nosotros trataremos adecuadamente la información personal de conformidad a nuestra Política de Privacidad.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} id='accordionbottom'>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>6. Registro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. El usuario puede solicitar el registro en una cuenta para el uso de nuestros servicios, siguiendo el procedimiento establecido por nosotros. La cuenta podrá ser utilizada de manera común en todos nuestros servicios.
          </Typography>
          <Typography>
            2. A la persona que haya solicitado el registro en una cuenta (referida en adelante como “solicitante de registro”), se le considerará que ha completado su registro al momento en que nosotros aprobemos su solicitud de registro.
          </Typography>
          <Typography>
            3. El usuario debe informar a nosotros cualquier cambio o modificación que surja en la información con la que se haya registrado, siguiendo el procedimiento establecido por nosotros. En caso de que se generen daños y/o perjuicios por la falta de notificación de cualquier cambio o modificación en la información de registro, nosotros no asumimos responsabilidad alguna al respecto, siendo el usuario mismo quien debe asumir las responsabilidades.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}