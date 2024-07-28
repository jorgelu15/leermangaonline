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
import vermangaContext from '../../../context/vermanga/vermangaContext';
import formatearFecha from '../../../adapters/formatearFecha';
import routes from '../../../helpers/routes';



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
  const { setCapituloInfo } = React.useContext(vermangaContext);

  React.useEffect(() => {
    if (!capitulos) {
      getCapitulosSerie(id);
    }
  }, [])

  function capitalize(str: any) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }


  return (
    <div className='accordion'>
      {filteredCapitulos?.map((cap: any, idx: any) => (
        <Accordion key={idx} sx={{ backgroundColor: 'rgb(46, 46, 46)', color: '#fff' }}>
          <AccordionSummary aria-controls={cap.panel + "d-content"} id={cap.panel + "d-header"}>
            <Typography>Capitulo: {cap.numero} {cap.titulo}</Typography>
          </AccordionSummary>
          {cap.capitulos?.map((translator: any, index: any) => {
            return (
              <AccordionDetails key={index} sx={{ backgroundColor: '#181818' }}>
                <Typography>
                  <Link to={routes.vermanga + `/${translator.id_grupo}/${cap.serie_uid}}/${cap.id_capitulo}/${cap.numero}`} onClick={() => setCapituloInfo(cap.id_capitulo, translator.id_grupo, cap.serie_uid, cap.numero)}>
                    <div className='typography'>
                      <div>
                        {capitalize(translator.nombreGrupo)}
                      </div>
                      <div>
                        <p>Fecha de publicacion: {formatearFecha(translator.fecha_pub)}</p>
                      </div>
                    </div>
                  </Link>
                </Typography>
              </AccordionDetails>
            )
          })}
        </Accordion>
      ))}
    </div>
  );
}