import { useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContainerHome from "../components/Container/ContainerHome";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { autenticado, usuario, usuarioAutenticado, logOut } = useAuth();

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
    // console.log(autenticado, "linea 15")
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