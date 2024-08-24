import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useForm } from "../hooks/useForm";
import routes from "../helpers/routes";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import eye from "../img/eye.svg";
import noEye from "../img/no-eye.svg";

const ForgotPassword = () => {
    const { form, onChangeGeneral } = useForm({ passwordnew: '', repeatPassword: '' });
    const { passwordnew, repeatPassword } = form;

    const { changePassword } = useAuth();

    const [params] = useSearchParams();

    // Recuperar el valor de la variable "var"
    const email = params.get('email');
    const code = params.get('code');

    const onSendPassword = () => {

        if(passwordnew.trim() === "" || repeatPassword.trim() === ""){

            return;
        }

        changePassword(email, code, passwordnew);
    }

    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <main className="container-general">
                <div className="width-page">

                    <div className="cont-login">
                        <h1 className="title-public-layout">
                            Recuperar contrasena de <Link to={routes.home}>LEERMANGAONLINE</Link>
                        </h1>

                        <form className="form" autoComplete="on">
                            <div className="form-group">
                                <label htmlFor="password" className="text-label">Contrasena nueva</label>
                                <div style={{ position: "relative" }}>
                                    <input type={showPass ? "text" : "password"} placeholder="Introduzca su nueva contrasena" id="passwordnew" className="input-style"
                                        value={passwordnew} onChange={(event) => onChangeGeneral(event, "passwordnew")}
                                    />
                                    <img onClick={() => setShowPass(!showPass)} src={showPass ? noEye : eye} style={{ filter: "invert(1)", position: "absolute", right: 20, top: 30, cursor: "pointer" }} width={24} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-label">Repita contrasena</label>
                                <div style={{ position: "relative" }}>
                                    <input type={showPass ? "text" : "password"} placeholder="Introduzca nuevamente su contrasena" id="repeatPassword" className="input-style"
                                        value={repeatPassword} onChange={(event) => onChangeGeneral(event, "repeatPassword")}
                                    />
                                    <img onClick={() => setShowPass(!showPass)} src={showPass ? noEye : eye} style={{ filter: "invert(1)", position: "absolute", right: 20, top: 30, cursor: "pointer" }} width={24} />
                                </div>
                            </div>
                            <div className="form-group" onClick={onSendPassword}>
                                <div className="input-style btn-primary">Cambiar contrasena</div>
                            </div>

                        </form>
                        <div className="flex justify-between">
                            <div><Link className="text-color-white" to={routes.register}>No tienes una cuenta? create una</Link></div>
                            <div><Link className="text-color-white" to={routes.login}>Ya tienes una cuenta? Inicia sesion</Link></div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default ForgotPassword;