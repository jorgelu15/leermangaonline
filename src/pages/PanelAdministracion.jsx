import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import HeaderPanel from "../components/Header/HeaderPanel";
import { useEffect } from "react";
import routes from "../helpers/routes";
import ContainerPanelAdministracion from "../components/Container/ContainerPanelAdministracion";


const Panel = () => {
  const { autenticado, usuarioAutenticado } = useAuth();

  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || routes.login;

  useEffect(() => {
    const verificarAutenticacion = async () => {
      if (!autenticado) {
        await usuarioAutenticado();
        // Aquí puedes realizar la redirección después de la autenticación.
        // Puedes usar el estado actualizado después de usuarioAutenticado.
        if (autenticado) {
          navigate(from, { replace: true });
        } else {
          navigate(routes.login);
        }
      }
    };

    verificarAutenticacion();
  }, [autenticado, navigate, from, usuarioAutenticado]);


  return (
    <div className="panel">
      <div className="header--home">
        <HeaderPanel />
      </div>
      <ContainerPanelAdministracion />

    </div>
  );
};

export default Panel;