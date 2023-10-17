import { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import routes from "../helpers/routes";
import useAuth from "../hooks/useAuth";

// import authContext from "../context/authentication/authContext";

const ProtectedRoute = () => {

  const { autenticado, usuarioAutenticado } = useAuth();
  
  useEffect(() => {
    usuarioAutenticado();
  }, [])

  return autenticado ? <Outlet/> : <Navigate to={routes.login} />
};

export default ProtectedRoute;