import { useContext, useEffect, useState } from "react";

import HeaderManga from "../components/Header/HeaderManga";
import Footer from "../components/Footer/Footer";
import ContainerVermanga from "../components/Container/ContainerVermanga";
import vermangaContext from "../context/vermanga/vermangaContext";

const Vermanga = () => {

  const [paginacion, setPaginacion] = useState(0);//0 para paginado, 1 para cascada
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
};
  return (
    <>
      <div className="header--home">
        <HeaderManga isVisible={isVisible} paginacion={paginacion} setPaginacion={setPaginacion}/>
      </div>
      <ContainerVermanga toggleVisibility={toggleVisibility} paginacion={paginacion}/>
      <Footer/>
    </>
  );
};

export default Vermanga;