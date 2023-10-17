import { useEffect } from "react";

import HeaderManga from "../components/Header/HeaderManga";
import Footer from "../components/Footer/Footer";
import ContainerVermanga from "../components/Container/ContainerVermanga";

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