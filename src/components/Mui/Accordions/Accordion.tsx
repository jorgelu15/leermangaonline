import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Accordion = styled((props: AccordionProps) => (
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

const caps = [{
  title: "Capitulo 1",
  cap: 1,
  panel: "panel1",
  translators: [{
    name: "Midgar translations",
    date: "27-07-2023"
  },{
    name: "Tumae translations",
    date: "26-07-2023"
  }]
},
{
  title: "Capitulo 2",
  cap: 2,
  panel: "panel2",
  translators: [{
    name: "Bokugen translations",
    date: "28-07-2023"
  }]
},
{
  title: "Capitulo 3",
  cap: 3,
  panel: "panel3",
  translators:[{
    name: "Nichirin transalations",
    date: "29-07-2023"
  }]
}]

const AccordionSummary = styled((props: AccordionSummaryProps) => (
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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div  className='accordion'>
      {caps.map((cap)=>(<Accordion sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} onChange={handleChange(cap.panel)}>
        <AccordionSummary aria-controls= {cap.panel+"d-content"} id={cap.panel+"d-header"}>
          <Typography>Capitulo: 0{cap.cap}</Typography>
        </AccordionSummary>
        {cap.translators.map((translator)=>(<AccordionDetails sx={{backgroundColor: '#181818'}}>
          <Typography>
          <Link to="../vermanga">
            <div className='typography'>  
                <div>
                  {translator.name}
                </div>
                <div>
                  <p>Fecha de publicacion: {translator.date}</p>
                </div>
            </div>
            </Link>
          </Typography>
        </AccordionDetails>))}
        
      </Accordion>))}
    </div>
  );
}