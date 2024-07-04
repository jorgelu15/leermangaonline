import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


import { useGrupos } from "../../../hooks/useGrupos";
import TableProyectos from "../../Mui/Tables/TableProyectos";
import SearchProyectos from "../../Search/SearchProyectos";


const PanelProyectos = (props) => {

    const { proyectos, getProyectos } = useGrupos();
    const [resultados, setResultados] = useState(proyectos);
    const [paramQ, setParamQ] = useState(null);

    const [busqueda, guardarBusqueda] = useState({
        proyecto: "",
        tipo: false
    });
    const { proyecto } = busqueda;

    const onChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };


    let { id } = useParams();

    useEffect(() => {
        if (!proyectos) {
            getProyectos(id);
        } else {
            setResultados(proyectos);
        }
    }, [proyectos, id]);

    useEffect(() => {
        getProyectos(id);
    }, [id]);

    const buscarProyecto = () => {
        if (proyecto.trim() !== "") {
            const resultadosBusqueda = proyectos?.filter((project) =>
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
                    <SearchProyectos buscarProyecto={buscarProyecto} onChange={onChange} setResultados={setResultados} proyecto={proyecto} proyectos={proyectos} setParamQ={setParamQ} paramQ={paramQ} />

                    {resultados?.length !== 0 ? <TableProyectos proyectos={resultados}></TableProyectos>
                        : <p className="mensaje">No hay solicitudes pendientes.</p>
                    }
                </div>
            </div>

        </div>
    )
}

export default PanelProyectos;