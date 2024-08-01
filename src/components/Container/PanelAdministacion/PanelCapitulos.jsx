import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TableProyectos from "../../Mui/Tables/TableProyectos";
import SearchProyectos from "../../Search/SearchProyectos";
import { useSeries } from "../../../hooks/useSeries";
import TableCapitulos from "../../Mui/Tables/TableCapitulos";
import SearchCapitulos from "../../Search/SearchCapitulos";

const PanelCapitulos = (props) => {
    const { capitulos, getAllCapitulos } = useSeries(); // Set default value
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
            await getAllCapitulos(); // Fetch series data
        };
        fetchData();
    }, []); // Only depend on getSeries

    useEffect(() => {
        // Update resultados only when series changes
        setResultados(capitulos);
    }, [capitulos]);

    const buscarProyecto = () => {
        if (proyecto.trim() !== "") {
            const resultadosBusqueda = capitulos.filter((project) =>
                project.titulo.toLowerCase().includes(proyecto.toLowerCase())
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
                    <h2>Capitulos</h2>
                </div>
                <div className="c-table">
                    <SearchCapitulos
                        buscarProyecto={buscarProyecto}
                        onChange={onChange}
                        setResultados={setResultados}
                        proyecto={proyecto}
                        proyectos={capitulos}
                        setParamQ={setParamQ}
                        paramQ={paramQ}
                    />

                    {resultados?.length !== 0 ? (
                        <TableCapitulos proyectos={resultados} />
                    ) : (
                        <p className="mensaje">No hay solicitudes pendientes.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PanelCapitulos;
