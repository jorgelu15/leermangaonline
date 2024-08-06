import { Link, useLocation, useNavigate } from "react-router-dom";
import routes from "../helpers/routes";
import { useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";

import eye from "../img/eye.svg";
import noEye from "../img/no-eye.svg";
import { useSnackbar } from "notistack";


const Login = () => {

    const { autenticado, usuario, msg, signIn, usuarioAutenticado } = useAuth();

    let navigate = useNavigate();
    let location = useLocation();
    const { enqueueSnackbar } = useSnackbar();
    const [showPass, setShowPass] = useState(false);

    let from = location.state?.from?.pathname || routes.login;

    //useEffect para validar si existe una sesion abierta
    useEffect(() => {
        if (autenticado) navigate(from, { replace: true });
    }, [autenticado, navigate, from]);

    useEffect(() => {
        if (autenticado) {
            navigate(routes.home)
        }
    }, [autenticado])


    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (correo.trim() === "" || clave.trim() === "") {
            enqueueSnackbar("Todos los campos son obligatorios", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
            return;
        }

        signIn({ correo, clave }).then(status => {
            if (status === 200) {
                enqueueSnackbar("Autenticando usuario", {
                    variant: "success",
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "right"
                    }
                });
                return;
            }
        }).catch(error => {
            enqueueSnackbar(error.message, {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
        })

    };

    return (
        <main className="container-general">
            <div className="width-page">

                <div className="cont-login">
                    <h1 className="title-public-layout">
                        Inicia sesion y a <span className="text-color-hover">LeerMangaOnline</span>
                    </h1>
                    <form className="form" autoComplete="on">

                        <div className="form-group">
                            <label htmlFor="email" className="text-label">correo electronico</label>
                            <input type="email" placeholder="Correo electronico" id="email" className="input-style"
                                value={correo} onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-label">contrasena</label>
                            <div style={{ position: "relative" }}>
                                <input type={showPass ? "text" : "password"} placeholder="Contrasena" id="password" className="input-style"
                                    value={clave} onChange={(e) => setClave(e.target.value)}
                                />
                                <img onClick={() => setShowPass(!showPass)} src={showPass ? noEye : eye} style={{ filter: "invert(1)", position: "absolute", right: 20, top: 30, cursor: "pointer" }} width={24} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div onClick={handlerSubmit} className="input-style btn-primary">Siguiente</div>
                        </div>

                    </form>

                    <div className="flex justify-between">
                        <div><Link className="text-color-white" to={routes.register}>No tienes una cuenta? create una</Link></div>
                        <div><Link className="text-color-white" to={routes.forgotPassword}>Olvide la contrasena</Link></div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Login;