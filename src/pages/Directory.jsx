import { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ContainerDirectory from "../components/Container/ContainerDirectory";
import { useAuth } from "../hooks/useAuth";
import directorioContext from "../context/directorio/directorioContext";

const Directory = () => {

  const { getSeries } = useContext(directorioContext);

  useEffect(() => {
    getSeries();
  }, [])

  return (
    <>
      <Header />
      <ContainerDirectory />
      <Footer />
    </>
  );
};

export default Directory;