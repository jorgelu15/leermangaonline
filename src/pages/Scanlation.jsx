import { useEffect, useContext } from "react";

import Header from "../components/Header/Header";
import ContainerScan from "../components/Container/ContainerScan";
import Footer from "../components/Footer/Footer";

import useAuth from "../hooks/useAuth";
import gruposContext from "../context/grupos/gruposContext";


const Scanlation = () => {
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
      <>
        <Header/>
        <ContainerScan/>
        <Footer/>
      </>
    );
  };
  
  export default Scanlation;