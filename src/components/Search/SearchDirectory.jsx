import { useContext, useState } from "react";

import lupa from "../../img/lupa.svg"

const SearchDirectory = (props) => {

  // const { setPage } = props;

  // const productsContext = useContext(ProductsContext);
  // const { filtrar } = productsContext;

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
    // filtrar(e.target.value);
  };

  return (
    <div className="query">
      <input type="text" className="input-src" placeholder="Buscar..." name="codigo" value={codigo} onChange={onChange}/>
      <button><img src={lupa}></img></button>
    </div>
  );
};

export default SearchDirectory;
