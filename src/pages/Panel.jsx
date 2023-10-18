import { useContext } from "react";

import useAuth from "../hooks/useAuth";
import gruposContext from "../context/grupos/gruposContext";

import HeaderPanel from "../components/Header/HeaderPanel";
import Footer from "../components/Footer/Footer";
import ContainerPanel from "../components/Container/ContainerPanel";
import { useEffect } from "react";


const Panel = () => {
  const { autenticado, usuarioAutenticado } = useAuth();

  const { grupo } = useContext(gruposContext)
  const { solicitudes, getSolicitudes } = useContext(gruposContext)

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
  }, [autenticado]);


  useEffect(() => {
    getSolicitudes(grupo?.id)
  }, []);

  return (
    <div className="panel">
      <div className="header--home">
        <HeaderPanel />
      </div>
      <ContainerPanel/>
      
    </div>
  );
};

export default Panel;