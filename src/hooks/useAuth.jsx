import { useContext, useEffect } from "react";
import authContext from "../context/auth/authContext";

export const useAuth = () => {
    const {
        usuario,
        autenticado,
        signIn,
        signUp,
        usuarioAutenticado,
        logOut
    } = useContext(authContext);

    useEffect(() => {
        if (!usuario) {
            usuarioAutenticado();
        }
    }, [])

    return {
        usuario,
        autenticado,
        signIn,
        signUp,
        usuarioAutenticado,
        logOut
    }
}