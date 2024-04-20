import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ContainerDirectory from "../components/Container/ContainerDirectory";
import useAuth from "../hooks/useAuth";

const Directory = () => {

  const { autenticado, usuarioAutenticado } = useAuth();

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
  }, [autenticado]);

    return (
      <>
        <Header/>
        <ContainerDirectory/>
        <Footer/>
      </>
    );
  };
  
  export default Directory;