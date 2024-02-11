import { useState } from "react";
import AccordionFilters from "../Mui/Accordions/AccordionFilters";

const FormFilter = (props) => {

    const {
        filters,
        setFilters
      } = props;

    return (
        <>
            <h3>Filtros</h3>
            <p>{filters.join(' - ')}</p>

            <AccordionFilters filters={filters} setFilters={setFilters}></AccordionFilters>
        </>
    );
  };
  
  export default FormFilter;