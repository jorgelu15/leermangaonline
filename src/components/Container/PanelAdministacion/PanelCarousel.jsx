import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSeries } from "../../../hooks/useSeries";
import TableCapitulos from "../../Mui/Tables/TableCapitulos";
import SearchCapitulos from "../../Search/SearchCapitulos";
import { useAdmin } from "../../../hooks/useAdmin";
import TableSlides from "../../Mui/Tables/TableSlides";

const PanelCarousel = (props) => {
    const { slider, getSliderImages } = useAdmin();
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getSliderImages(); // Fetch series data
        };
        fetchData();
    }, []); // Only depend on getSeries

    useEffect(() => {
        // Update resultados only when series changes
        setResultados(slider);
    }, [slider]);

    return (
        <div className="panel-miembros">
            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Carousel</h2>
                </div>
                <div className="c-table">
                    <div className="query">
                        <button className="table-btn-ac" style={{padding: 10, background: "#2a7cce"}}>Subir slide</button>
                    </div>

                    {resultados?.length !== 0 ? (
                        <TableSlides proyectos={resultados} />
                    ) : (
                        <p className="mensaje">No hay solicitudes pendientes.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PanelCarousel;
