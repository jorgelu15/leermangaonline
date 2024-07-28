import { useContext, useEffect } from "react";

import HeaderManga from "../components/Header/HeaderManga";
import Footer from "../components/Footer/Footer";
import ContainerVermanga from "../components/Container/ContainerVermanga";
import vermangaContext from "../context/vermanga/vermangaContext";

const Vermanga = () => {

  return (
    <>
      <div className="header--home">
        <HeaderManga/>
      </div>
      <ContainerVermanga/>
      <Footer/>
    </>
  );
};

export default Vermanga;