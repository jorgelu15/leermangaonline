import { useState } from "react";
import AccordionFilters from "../Mui/Accordions/AccordionFilters";

const FormFilter = (props) => {
    const { filters, setFilters } = props;

    return (
        <>
            <h3>Filtros</h3>
            <p>{Object.entries(filters)
                    .map(([key, values]) => values.join(', '))
                    .filter(value => value)
                    .join(' - ')}</p>

            <AccordionFilters filters={filters} setFilters={setFilters} />
        </>
    );
};

export default FormFilter;
