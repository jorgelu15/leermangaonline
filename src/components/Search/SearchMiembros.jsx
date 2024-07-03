import lupa from "../../img/lupa.svg"
import escoba from "../../assets/escoba.png";

const SearchSolicitudes = (props) => {
  const {
    buscarUsuario,
    onChange,
    usuario,
    setResultados,
    miembros,
    setParamQ,
    paramQ
  } = props;

  return (
    <>
      <div className="query">
        <input type="text" className="input-src" placeholder="Introduzca el nombre del usuario" name="usuario" value={usuario} onChange={onChange} />
        <button onClick={buscarUsuario}><img src={lupa}></img>Buscar</button>
      </div>
      <div className="query" style={{ alignItems: "center", justifyContent: paramQ ? "space-between" : "flex-end" }}>
        {paramQ && (
          <div>
            <p>Resultados de: <span style={{ fontStyle: "italic" }}><b>{paramQ}</b></span></p>
          </div>
        )}
        <button className="button" style={{ minHeight: 40, background: "#ffc107" }} onClick={() => {
          setResultados(miembros);
          setParamQ(null);
        }}>
          <img width={16} src={escoba} />
          <p>Restablecer tabla</p>
        </button>
      </div>
    </>
  );
};

export default SearchSolicitudes;
