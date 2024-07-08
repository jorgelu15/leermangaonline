import { useEffect } from "react";
import Header from "../components/Header/Header";
import ContainerManga from "../components/Container/ContainerManga";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../hooks/useAuth";


const Manga = () => {

  const { autenticado, usuarioAutenticado } = useAuth();

  useEffect(() => {
    if (!autenticado) {
      usuarioAutenticado();
    }
  }, [autenticado]);

  return (
    <>
      <Header />
      <ContainerManga />
      <Footer />
    </>
  );
};

export default Manga;