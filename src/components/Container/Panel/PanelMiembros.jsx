import { useEffect, useState } from "react"

import TableMiembros from "../../Mui/Tables/TableMiembros";

import SearchMiembros from "../../Search/SearchMiembros";
import { useParams } from "react-router-dom";
import { useGrupos } from "../../../hooks/useGrupos";


const PanelMiembros = (props) => {

    const { miembros, getMiembros } = useGrupos();
    let { id } = useParams();

    const [resultados, setResultados] = useState(miembros);
    const [paramQ, setParamQ] = useState(null);

    const [busqueda, guardarBusqueda] = useState({
        usuario: "",
        tipo: false
    });
    const { usuario } = busqueda;

    const onChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    const buscarUsuario = () => {
        if (usuario.trim() !== "") {
            const resultadosBusqueda = miembros.filter((miembro) =>
                miembro.usuario.toLowerCase().includes(usuario.toLowerCase())
            );
            setParamQ(usuario);
            setResultados(resultadosBusqueda);
        }
    };


    useEffect(() => {
        if (!miembros) {
            getMiembros(id);
        } else {
            setResultados(miembros);
        }
    }, [miembros, id]);

    useEffect(() => {
        getMiembros(id);
    }, [id]);
    
    return (
        <div className="panel-miembros">

            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Miembros</h2>
                    {/* <p>Miembros totales: {filterSolic ? filterSolic.length : 0}</p> */}
                </div>

                <div className="c-table">
                    <SearchMiembros buscarUsuario={buscarUsuario} onChange={onChange} setResultados={setResultados} usuario={usuario} miembros={miembros} setParamQ={setParamQ} paramQ={paramQ} />

                    {resultados?.length !== 0 ? <TableMiembros miembros={resultados} />
                        : <p className="mensaje">No hay miembros.</p>}
                </div>
            </div>

        </div>
    )
}

export default PanelMiembros;