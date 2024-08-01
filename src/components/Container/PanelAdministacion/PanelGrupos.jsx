import { useEffect, useState } from "react";

import SearchGrupos from "../../Search/SearchGrupos";
import TableGrupos from "../../Mui/Tables/TableGrupos";
import { useGrupos } from "../../../hooks/useGrupos";

const PanelGrupos = (props) => {
    const { grupos, getAllGrupos } = useGrupos();
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
            await getAllGrupos(); // Fetch series data
        };
        fetchData();
    }, []); // Only depend on getSeries

    useEffect(() => {
        // Update resultados only when series changes
        setResultados(grupos);
    }, [grupos]);

    const buscarProyecto = () => {
        if (proyecto.trim() !== "") {
            const resultadosBusqueda = grupos.filter((project) =>
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
                    <h2>Grupos</h2>
                </div>
                <div className="c-table">
                    <SearchGrupos
                        buscarProyecto={buscarProyecto}
                        onChange={onChange}
                        setResultados={setResultados}
                        proyecto={proyecto}
                        proyectos={grupos}
                        setParamQ={setParamQ}
                        paramQ={paramQ}
                    />

                    {resultados?.length !== 0 ? (
                        <TableGrupos items={grupos} />
                    ) : (
                        <p className="mensaje">No hay solicitudes pendientes.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PanelGrupos;
