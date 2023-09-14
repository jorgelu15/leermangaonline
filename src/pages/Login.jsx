import { Link } from "react-router-dom";
import routes from "../helpers/routes";

const Login = () => {
    return (
        <>
            <h1 className="title-public-layout">
                Inicia sesion y a <span className="text-color-hover">LeerMangaOnline</span>
            </h1>
            <form className="form" autoComplete="off">
                <div className="form-group">
                    <label htmlFor="email" className="text-label">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="input-style"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="text-label">contrasena</label>
                    <input
                        type="email"
                        placeholder="Contrasena"
                        id="email"
                        className="input-style"
                    />
                </div>
                <div className="form-group">

                    <input
                        type="submit"
                        value="Iniciar sesion"
                        id="email"
                        className="input-style btn-primary"
                    />
                </div>
            </form>
            <div className="flex justify-between">
                <div><Link className="text-color-white" to={routes.register}>No tienes una cuenta? create una</Link></div>
                <div><Link className="text-color-white" to={routes.forgotPassword}>Olvide la contrasena</Link></div>
            </div>
        </>
    );
}

export default Login;