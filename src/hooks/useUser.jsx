import { useContext } from "react"
import perfilContext from "../context/perfil/perfilContext"

export const useUser = () => {
    const {
        perfil,
        msg,
        getPerfil,
        updatePerfil
    } = useContext(perfilContext);


    return {
        perfil,
        msg,
        getPerfil,
        updatePerfil
    }
}