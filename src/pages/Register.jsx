import { Link, useNavigate } from "react-router-dom";
import routes from "../helpers/routes";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

import eye from "../img/eye.svg";
import noEye from "../img/no-eye.svg";
import { useSnackbar } from "notistack";

const Register = () => {

    const { autenticado, signUp, usuarioAutenticado } = useAuth();
    // let location = useLocation();
    let navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [showPass, setShowPass] = useState(false);

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

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (usuario.trim() === "" || correo.trim() === "" || clave.trim() === "" || claveC.trim() === "") {
            enqueueSnackbar("Todos los campos son obligatorios", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
            return;
        }
        if (!validarEmail(correo)) {
            enqueueSnackbar("El correo electronico no es valido", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
            return;
        }
        if (clave !== claveC) {
            enqueueSnackbar("Las claves no coinciden", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
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
                    <form className="form" autoComplete="off" onSubmit={handlerSubmit}>
                        <div className="form-group">
                            <label htmlFor="usuario" className="text-label">Nombre de usuario</label>
                            <input type="text" placeholder="Nombre de usuario" id="usuario" className="input-style"
                                value={usuario} onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="text-label">Correo electrónico</label>
                            <input type="email" placeholder="Correo electrónico" id="email" className="input-style"
                                value={correo} onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-label">Contraseña</label>
                            <div style={{ position: "relative" }}>
                                <input type={showPass ? "text" : "password"} placeholder="Contraseña" id="password" className="input-style"
                                    value={clave} onChange={(e) => setClave(e.target.value)}
                                />
                                <img onClick={() => setShowPass(!showPass)} src={showPass ? noEye : eye} style={{ filter: "invert(1)", position: "absolute", right: 20, top: 30, cursor: "pointer" }} width={24} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cPassword" className="text-label">Confirma tu contraseña</label>
                            <div style={{ position: "relative" }}>
                                <input type={showPass ? "text" : "password"} placeholder="Confirmar contraseña" id="cPassword" className="input-style"
                                    value={claveC} onChange={(e) => setClaveC(e.target.value)}
                                />
                                <img onClick={() => setShowPass(!showPass)} src={showPass ? noEye : eye} style={{ filter: "invert(1)", position: "absolute", right: 20, top: 30, cursor: "pointer" }} width={24} />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="input-style btn-primary">Siguiente</button>
                        </div>
                    </form>
                    <div className="flex justify-between">
                        <div><Link className="text-color-white" to={routes.register}>¿No tienes una cuenta? Crea una</Link></div>
                        <div><Link className="text-color-white" to={routes.login}>¿Ya tienes una cuenta? Inicia sesión</Link></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;
