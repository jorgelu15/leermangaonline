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
import { useSeries } from '../../../hooks/useSeries';
import { any } from 'prop-types';
import { useGrupos } from '../../../hooks/useGrupos';

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
  }, {
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
  translators: [{
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

export default function CustomizedAccordions({ id, filteredCapitulos, ...props }) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const { capitulos, getCapitulosSerie } = useSeries();
  const { grupos, getGruposByCapitulo } = useGrupos();

  React.useEffect(() => {
    if (!capitulos) {
      getCapitulosSerie(id);
    }
  }, [])


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleGroups = (id_grupo) => {
    getGruposByCapitulo(id_grupo);
  }

  function capitalize(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }


  return (
    <div className='accordion'>
      {filteredCapitulos?.map((cap, idx) => (<Accordion key={idx} sx={{ backgroundColor: 'rgb(46, 46, 46)', color: '#fff' }} onChange={handleChange(cap.panel)}>
        <AccordionSummary aria-controls={cap.panel + "d-content"} id={cap.panel + "d-header"} onClick={() => handleGroups(cap.id_grupo)}>
          <Typography>Capitulo: {cap.numero}</Typography>
        </AccordionSummary>
        {grupos?.map((translator, idx) => (<AccordionDetails key={idx} sx={{ backgroundColor: '#181818' }}>
          <Typography>
            <Link to="../vermanga">
              <div className='typography'>
                <div>
                  {capitalize(translator.nombre)}
                </div>
                <div>
                  <p>Fecha de publicacion: {cap?.fecha_pub}</p>
                </div>
              </div>
            </Link>
          </Typography>
        </AccordionDetails>))}

      </Accordion>))}
    </div>
  );
}