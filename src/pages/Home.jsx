import { useContext, useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContainerHome from "../components/Container/ContainerHome";
import { useAuth } from "../hooks/useAuth";
import administracionContext from "../context/administracion/administracionContext";

const Home = () => {

  const { autenticado, usuarioAutenticado } = useAuth();

  const { getSliderImages } = useContext(administracionContext);

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
  }, [autenticado]);

  useEffect(() => {
    getSliderImages();
  }, [])

  return (
    <>
      <div className="header--home">
        <Header />
      </div>
      <ContainerHome />
      <Footer />
    </>
  );
};

export default Home;