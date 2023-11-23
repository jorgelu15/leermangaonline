import { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import routes from "../helpers/routes";
import useAuth from "../hooks/useAuth";

// import authContext from "../context/authentication/authContext";

const ProtectedRoute = () => {

  const { autenticado, usuarioAutenticado } = useAuth();
  
  useEffect(() => {

    (async () => {
      await usuarioAutenticado();
    })()
    
    console.log(autenticado, "linea 18")

  }, [])

  return autenticado ? <Outlet/> : <Navigate to={routes.login} />
};

export default ProtectedRoute;