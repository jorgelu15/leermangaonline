import lupa from "../../../img/lupa.svg"

const PanelGeneros = () => {

    

    return (
        <div className="panel-miembros">

            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Generos</h2>
                </div>

                <div className="c-table">
                    <div className="query">
                        <input type="text" className="input-src" placeholder="Introduzca el nombre del genero" name="genero" />
                        <button>Insertar</button>
                    </div>
                    {filterSolic?.length !== 0 ? <TableMiembros solicitudesV={filterSolic}></TableMiembros>
                        : <p className="mensaje">No hay miembros.</p>}
                </div>
            </div>

        </div>
    );
}

export default PanelGeneros;