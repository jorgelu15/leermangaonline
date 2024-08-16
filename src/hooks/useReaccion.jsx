import { useContext, useEffect } from "react";
import reaccionesContext from "../context/reacciones/reaccionesContext";

export const useReaccion = () => {
    const {
        reaccionesPorUsuario,
        reacciones_usuario,
        reaccionesSerieUsuario,
        getSeriesPorReaccionUsuario,
        getReaccionesSerieUsuario,
        getReaccionesUsuario,
        setReaccion
    } = useContext(reaccionesContext);

    return {
        reaccionesPorUsuario,
        reacciones_usuario,
        reaccionesSerieUsuario,
        getSeriesPorReaccionUsuario,
        getReaccionesSerieUsuario,
        getReaccionesUsuario,
        setReaccion
    }
}