import lupa from "../../../img/lupa.svg"

const PanelInformacion = () => {
    return (
        <div className="panel-miembros">
            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Informacion</h2>
                </div>
                <div className="c-table" style={{ minHeight: "none" }}>
                    <div className="query">
                        <input type="text" className="input-src" placeholder="Introduzca el nombre de su grupo" name="name" />
                    </div>
                </div>
                <div className="c-table">
                    <div className="query">
                        <textarea className="input-src" placeholder="Introduzca una breve descripcion sobre el trabajo de su grupo" name="name" ></textarea>
                        <textarea className="input-src" placeholder="Introduzca un mensaje en su tablon que podra ver todo el mundo" name="name"></textarea>
                    </div>
                </div>
                <div className="c-table">
                    <div className="query">
                        <button
                            style={{
                                padding: 10,
                                width: "100%"
                            }}
                        >Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelInformacion;