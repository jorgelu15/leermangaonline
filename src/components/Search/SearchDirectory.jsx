import { useContext, useState } from "react";

import lupa from "../../img/lupa.svg"
import directorioContext from "../../context/directorio/directorioContext";

const SearchDirectory = (props) => {

  const { filters } = props;

  // const productsContext = useContext(ProductsContext);
  // const { filtrar } = productsContext;
  const { filtrar } = useContext(directorioContext);

  const [busqueda, guardarBusqueda] = useState({
    codigo: "",
    tipo: false
  });
  const { codigo } = busqueda;

  const onChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
    // setPage(0);
  };

  const onClickBuscar = () => {
    filtrar(codigo, filters);
  }

  return (
    <div className="query">
      <input type="text" className="input-src" placeholder="Buscar..." name="codigo" value={codigo} onChange={onChange}/>
      <button onClick={onClickBuscar}><img src={lupa}></img></button>
    </div>
  );
};

export default SearchDirectory;
