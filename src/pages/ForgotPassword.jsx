import { Link, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useForm } from "../hooks/useForm";
import routes from "../helpers/routes";

const ForgotPassword = () => {
    const { form, onChangeGeneral } = useForm({ email: '' });
    const { email } = form;

    const [params] = useSearchParams();

    // Recuperar el valor de la variable "var"
    const tokenRecovery = params.get('tokenRecovery');


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
                                <label htmlFor="password" className="text-label">Correo electronico</label>
                                <div style={{ position: "relative" }}>
                                    <input type={"text"} placeholder="Introduzca su correo electronico" id="email" className="input-style"
                                        value={email} onChange={(event) => onChangeGeneral(event, "email")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-style btn-primary">Enviar</div>
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