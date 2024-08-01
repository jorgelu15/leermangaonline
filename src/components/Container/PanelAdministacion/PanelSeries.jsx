import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TableProyectos from "../../Mui/Tables/TableProyectos";
import SearchProyectos from "../../Search/SearchProyectos";
import { useSeries } from "../../../hooks/useSeries";

const PanelSeries = (props) => {
    const { series = [], getSeries } = useSeries(); // Set default value
    const [resultados, setResultados] = useState([]);
    const [paramQ, setParamQ] = useState(null);

    const [busqueda, guardarBusqueda] = useState({
        proyecto: "",
        tipo: false,
    });
    const { proyecto } = busqueda;

    const onChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            await getSeries(); // Fetch series data
        };
        fetchData();
    }, []); // Only depend on getSeries

    useEffect(() => {
        // Update resultados only when series changes
        setResultados(series);
    }, [series]);

    const buscarProyecto = () => {
        if (proyecto.trim() !== "") {
            const resultadosBusqueda = series.filter((project) =>
                project.nombre.toLowerCase().includes(proyecto.toLowerCase())
            );
            setParamQ(proyecto);
            setResultados(resultadosBusqueda);
            guardarBusqueda({ ...busqueda, proyecto: "" });
        }
    };

    return (
        <div className="panel-miembros">
            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Proyectos</h2>
                </div>
                <div className="c-table">
                    <SearchProyectos
                        buscarProyecto={buscarProyecto}
                        onChange={onChange}
                        setResultados={setResultados}
                        proyecto={proyecto}
                        proyectos={series}
                        setParamQ={setParamQ}
                        paramQ={paramQ}
                    />

                    {resultados?.length !== 0 ? (
                        <TableProyectos proyectos={resultados} />
                    ) : (
                        <p className="mensaje">No hay solicitudes pendientes.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PanelSeries;
