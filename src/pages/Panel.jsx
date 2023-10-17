import { useEffect } from "react";

import HeaderPanel from "../components/Header/HeaderPanel";
import Footer from "../components/Footer/Footer";
import ContainerPanel from "../components/Container/ContainerPanel";
import useAuth from "../hooks/useAuth";


const Panel = () => {
  const { autenticado, usuario, usuarioAutenticado} = useAuth();

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
  }, [autenticado]);

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