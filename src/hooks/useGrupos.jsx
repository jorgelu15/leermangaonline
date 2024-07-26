import { useContext, useEffect } from "react";
import gruposContext from "../context/grupos/gruposContext";

export const useGrupos = () => {
    const {
        solicitudes,
        solicitud,
        grupos,
        grupo,
        proyectos,
        miembros,
        insertSolicitud,
        getSolicitudes,
        getGruposByCapitulo,
        getGrupos,
        getGrupo,
        getMiembros,
        getProyectos,
        getSolicitud,
        buscar
    } = useContext(gruposContext);


    return {
        solicitud,
        solicitudes,
        grupos,
        grupo,
        proyectos,
        miembros,
        insertSolicitud,
        getSolicitudes,
        getGruposByCapitulo,
        getGrupos,
        getGrupo,
        getMiembros,
        getProyectos,
        getSolicitud,
        buscar
    }
}