import React, { useContext, useState } from "react";
import { TailSpin } from 'react-loader-spinner';
import lupa from "../../img/lupa.svg";
import directorioContext from "../../context/directorio/directorioContext";

const FallbackLoader = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row", // Alinea los elementos en columna,
    }}>
      <TailSpin
        visible={true}
        height={24}
        width={24}
        color="#ffffff"
        ariaLabel="tail-spin-loading"
        radius={1}
        thickness={4} // Ajusta el grosor del spinner aquí
        wrapperStyle={{}}
        wrapperClass=""
        contentLoader={(props) => (
          <div>
            <TailSpin {...props} />
          </div>
        )}
      />
    </div>
  );
};

const SearchDirectory = (props) => {
  const { filters: filtros } = props;
  const { filtrar } = useContext(directorioContext);
  const [loading, setLoading] = useState(false);
  const [busqueda, guardarBusqueda] = useState({
    consulta: "",
  });
  const { consulta } = busqueda;

  const onChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const onClickBuscar = async () => {
    setLoading(true);
    // Simular un retraso de 2 segundos antes de realizar la búsqueda
    setTimeout(async () => {
      try {
        await filtrar({
          consulta: consulta,
          filters: filtros
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 1500); // 2000 milisegundos = 2 segundos
  };

  return (
    <div className="query">
      <input type="text" className="input-src" placeholder="Buscar..." name="consulta" value={consulta} onChange={onChange} />
      <button onClick={onClickBuscar}>
        {loading ? <FallbackLoader /> : <img src={lupa} alt="Lupa" />}
      </button>
    </div>
  );
};

export default SearchDirectory;
