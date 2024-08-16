import { useEffect } from "react";
import Header from "../components/Header/Header";
import ContainerManga from "../components/Container/ContainerManga";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../hooks/useAuth";
import { useReaccion } from "../hooks/useReaccion";
import { useParams } from "react-router-dom";


const Manga = () => {

  const { usuario } = useAuth();

  const { getReaccionesSerieUsuario } = useReaccion();

  const { id } = useParams();

  useEffect(() => {
    if(usuario){
      getReaccionesSerieUsuario(id, usuario?.id);
    }
  }, [usuario])

  return (
    <>
      <Header />
      <ContainerManga />
      <Footer />
    </>
  );
};

export default Manga;