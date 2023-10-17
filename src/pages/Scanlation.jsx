import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

import Header from "../components/Header/Header";
import ContainerScan from "../components/Container/ContainerScan";
import Footer from "../components/Footer/Footer";


const Scanlation = () => {
  const { autenticado, usuarioAutenticado } = useAuth();

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
    
  }, [autenticado]);

    return (
      <>
        <Header/>
        <ContainerScan/>
        <Footer/>
      </>
    );
  };
  
  export default Scanlation;