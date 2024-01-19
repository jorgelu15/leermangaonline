import { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import routes from "../helpers/routes";
import useAuth from "../hooks/useAuth";

// import authContext from "../context/authentication/authContext";

const ProtectedRoute = () => {
  const { autenticado, usuarioAutenticado } = useAuth();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const verificarAutenticacion = async () => {
      await usuarioAutenticado();
      setCargando(false); // Marcar como no cargando después de verificar
    };

    verificarAutenticacion();
  }, [usuarioAutenticado]);

  if (cargando) {
    // Puedes mostrar un indicador de carga aquí si lo deseas
    return <div>Cargando...</div>;
  }

  return autenticado ? <Outlet /> : <Navigate to={routes.login} />;
};

export default ProtectedRoute;