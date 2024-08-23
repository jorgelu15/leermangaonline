import { useContext, useEffect } from "react";
import authContext from "../context/auth/authContext";

export const useAuth = () => {
    const {
        usuario,
        autenticado,
        status,
        codigo_status,
        cambio_password_status,
        signIn,
        signUp,
        usuarioAutenticado,
        logOut,
        forgotpassword,
        validarCodigo,
        changePassword
    } = useContext(authContext);

    useEffect(() => {
        if (!usuario) {
            usuarioAutenticado();
        }
    }, [])

    return {
        usuario,
        autenticado,
        status,
        codigo_status,
        cambio_password_status,
        signIn,
        signUp,
        usuarioAutenticado,
        logOut,
        forgotpassword,
        validarCodigo,
        changePassword
    }
}