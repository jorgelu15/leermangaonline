import { useContext, useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContainerSubirmanga from "../components/Container/ContainerSubirmanga";

import { useAuth } from "../hooks/useAuth";
import serieContext from "../context/serie/serieContext";
import gruposContext from "../context/grupos/gruposContext";

const Subirmanga = () => {

  const { autenticado, usuario, usuarioAutenticado } = useAuth();

  const { getSeries } = useContext(serieContext);

  const { getGrupos } = useContext(gruposContext);

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
  }, [autenticado]);

  useEffect(() => {
    getSeries();
    getGrupos(usuario?.id);
  }, [])

  return (
    <>
      <Header />
      <ContainerSubirmanga />
      <Footer />
    </>
  );
};

export default Subirmanga;