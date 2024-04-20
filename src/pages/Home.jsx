import { useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContainerHome from "../components/Container/ContainerHome";
import useAuth from "../hooks/useAuth";

const Home = () => {
  
  const { autenticado, usuarioAutenticado } = useAuth();

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
  }, [autenticado]);

  return (
    <>
      <div className="header--home">
        <Header />
      </div>
      <ContainerHome/>
      <Footer/>
    </>
  );
};

export default Home;