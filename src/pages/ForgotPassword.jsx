import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useForm } from "../hooks/useForm";
import routes from "../helpers/routes";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const ForgotPassword = () => {

    const { forgotpassword, validarCodigo } = useAuth();

    const { form, onChangeGeneral } = useForm({ email: '', code: '' });
    const { email, code } = form;

    const [params] = useSearchParams();
    const [sendedCode, setSendedCode] = useState(false);
    let navigate = useNavigate();
    // Recuperar el valor de la variable "var"
    const tokenRecovery = params.get('tokenRecovery');

    const onSendCode = () => {
        setSendedCode(true);
        forgotpassword({correo: email});
    }

    const onVerifyCode = () => {
        validarCodigo({correo: email, codigo: code});
        navigate(routes.restorePassword+`?email=${email}&code=${code}`);
    }

    return (
        <>
            <main className="container-general">
                <div className="width-page">

                    <div className="cont-login">
                        <h1 className="title-public-layout">
                            Recuperar contrasena de <Link to={routes.home}>LEERMANGAONLINE</Link>
                        </h1>
                        {sendedCode ? (
                            <form className="form" autoComplete="on">
                                <div className="form-group">
                                    <label htmlFor="password" className="text-label">Codigo</label>
                                    <div style={{ position: "relative" }}>
                                        <input type={"text"} placeholder="Introduzca el codigo que enviamos a su correo" id="email" className="input-style"
                                            value={code} onChange={(event) => onChangeGeneral(event, "code")}
                                        />
                                    </div>
                                </div>
                                <div className="form-group" onClick={onVerifyCode}>
                                    <div className="input-style btn-primary">Enviar codigo</div>
                                </div>

                            </form>
                        ) : (
                            <form className="form" autoComplete="on">
                                <div className="form-group">
                                    <label htmlFor="password" className="text-label">Correo electronico</label>
                                    <div style={{ position: "relative" }}>
                                        <input type={"text"} placeholder="Introduzca su correo electronico" id="email" className="input-style"
                                            value={email} onChange={(event) => onChangeGeneral(event, "email")}
                                        />
                                    </div>
                                </div>
                                <div className="form-group" onClick={onSendCode}>
                                    <div className="input-style btn-primary">{sendedCode ? "Codigo Enviado" : "Enviar codigo"}</div>
                                </div>

                            </form>
                        )}
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