import { Link } from "react-router-dom";
import routes from "../helpers/routes";

const Register = () => {
    return (
        <>
            <h1 className="title-public-layout">
                Registrate para poder <span className="text-color-hover">LeerMangaOnline</span>
            </h1>
            <form className="form" autoComplete="off">
                <div className="form-group">
                    <label htmlFor="usuario" className="text-label">Nombre de usuario</label>
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        id="usuario"
                        className="input-style"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="text-label">correo electronico</label>
                    <input
                        type="email"
                        placeholder="Correo electronico"
                        id="email"
                        className="input-style"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="text-label">contrasena</label>
                    <input
                        type="password"
                        placeholder="Contrasena"
                        id="password"
                        className="input-style"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cPassword" className="text-label">Confirma tu contrasena</label>
                    <input
                        type="password"
                        placeholder="Confirmar contrasena"
                        id="cPassword"
                        className="input-style"
                    />
                </div>
                <div className="form-group">

                    <div
                        type="submit"
                        value="Iniciar sesion"
                        id="email"
                        className="input-style btn-primary"
                    >Siguiente</div>
                </div>
            </form>
            <div className="flex justify-between">
                <div><Link className="text-color-white" to={routes.register}>No tienes una cuenta? create una</Link></div>
                <div><Link className="text-color-white" to={routes.forgotPassword}>Ya tienes una cuenta? inicia sesion</Link></div>
            </div>
        </>
    );
}

export default Register;