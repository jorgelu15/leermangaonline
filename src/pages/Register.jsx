import { Link, useNavigate } from "react-router-dom";
import routes from "../helpers/routes";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = () => {

    const { autenticado, signUp, usuarioAutenticado } = useAuth();
    // let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (!autenticado) {
            usuarioAutenticado();
        }
        if (autenticado) {
            navigate(routes.home)
        }
    }, [autenticado]);


    const [usuario, setUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [claveC, setClaveC] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
    
        if (usuario.trim() === "" || correo.trim() === "" || clave.trim() === "" || claveC.trim() === "") {
        //   mostrarAlerta('Todos los campos son obligatorios');
          return;
        }
        if (clave !== claveC) {
        //   mostrarAlerta('Claves distintas');
            return;
        }

        signUp({ usuario, correo, clave, rol: "1" });
    };
    
    return (
        <main className="container-general">
            <div className="width-page">

                <div className="cont-login">
                    <h1 className="title-public-layout">
                        Registrate para poder <span className="text-color-hover">LeerMangaOnline</span>
                    </h1>
                    <form className="form" autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="usuario" className="text-label">Nombre de usuario</label>
                            <input type="text" placeholder="Nombre de usuario" id="usuario" className="input-style"
                                value={usuario} onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="text-label">correo electronico</label>
                            <input type="email" placeholder="Correo electronico" id="email" className="input-style"
                                value={correo} onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-label">contrasena</label>
                            <input type="password" placeholder="Contrasena" id="password" className="input-style"
                                value={clave} onChange={(e) => setClave(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cPassword" className="text-label">Confirma tu contrasena</label>
                            <input type="password" placeholder="Confirmar contrasena" id="cPassword" className="input-style"
                                value={claveC} onChange={(e) => setClaveC(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <div onClick={handlerSubmit} className="input-style btn-primary">Siguiente</div>
                        </div>
                    </form>
                    <div className="flex justify-between">
                        <div><Link className="text-color-white" to={routes.login}>No tienes una cuenta? create una</Link></div>
                        <div><Link className="text-color-white" to={routes.login}>Ya tienes una cuenta? inicia sesion</Link></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;