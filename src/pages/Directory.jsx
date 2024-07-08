import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ContainerDirectory from "../components/Container/ContainerDirectory";
import { useAuth } from "../hooks/useAuth";

const Directory = () => {


  return (
    <>
      <Header />
      <ContainerDirectory />
      <Footer />
    </>
  );
};

export default Directory;