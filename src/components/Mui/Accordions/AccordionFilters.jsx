import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useGenero } from '../../../hooks/useGenero';

export default function AccordionFilters({ filters, setFilters }) {
    const { generos } = useGenero();

    const handleFilterChange = (e, category) => {
        const { value } = e.target;
        setFilters(prevFilters => {
            const currentCategory = prevFilters[category];
            const index = currentCategory.indexOf(value);

            if (index === -1) {
                return {
                    ...prevFilters,
                    [category]: [...currentCategory, value]
                };
            } else {
                return {
                    ...prevFilters,
                    [category]: currentCategory.filter(item => item !== value)
                };
            }
        });
    };

    return (
        <div>
            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Género</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <FormGroup>
                            {
                                generos?.map((genero, idx) => {
                                    return (
                                        <FormControlLabel key={idx} control={<Checkbox value={genero.genero} onChange={(e) => handleFilterChange(e, `genero`)} />} label={genero.genero} />
                                    )
                                })
                            }
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
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
                            <FormControlLabel control={<Checkbox value="manga" onChange={(e) => handleFilterChange(e, 'tipo')} />} label="Manga" />
                            <FormControlLabel control={<Checkbox value="manhua" onChange={(e) => handleFilterChange(e, 'tipo')} />} label="Manhua" />
                            <FormControlLabel control={<Checkbox value="manhwa" onChange={(e) => handleFilterChange(e, 'tipo')} />} label="Manhwa" />
                            <FormControlLabel control={<Checkbox value="novela" onChange={(e) => handleFilterChange(e, 'tipo')} />} label="Novela" />
                            <FormControlLabel control={<Checkbox value="one shot" onChange={(e) => handleFilterChange(e, 'tipo')} />} label="One Shot" />
                            <FormControlLabel control={<Checkbox value="doujinshi" onChange={(e) => handleFilterChange(e, 'tipo')} />} label="Doujinshi" />
                            <FormControlLabel control={<Checkbox value="oel" onChange={(e) => handleFilterChange(e, 'tipo')} />} label="OEL" />
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Demografía</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox value="seinen" onChange={(e) => handleFilterChange(e, 'demografia')} />} label="Seinen" />
                            <FormControlLabel control={<Checkbox value="shoujo" onChange={(e) => handleFilterChange(e, 'demografia')} />} label="Shoujo" />
                            <FormControlLabel control={<Checkbox value="shounen" onChange={(e) => handleFilterChange(e, 'demografia')} />} label="Shounen" />
                            <FormControlLabel control={<Checkbox value="josei" onChange={(e) => handleFilterChange(e, 'demografia')} />} label="Josei" />
                            <FormControlLabel control={<Checkbox value="kodomo" onChange={(e) => handleFilterChange(e, 'demografia')} />} label="Kodomo" />
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
