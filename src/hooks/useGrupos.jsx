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
        seguidores,
        seguidores_por_fecha,
        insertSolicitud,
        getSolicitudes,
        getGruposByCapitulo,
        getGrupos,
        getGrupo,
        getMiembros,
        getProyectos,
        getSolicitud,
        buscar,
        getSeguidores,
        seguirGrupo,
        getSeguidoresAnoActual,
        putInfoGrupo,
        getAllGrupos
    } = useContext(gruposContext);


    return {
        solicitud,
        solicitudes,
        grupos,
        grupo,
        proyectos,
        miembros,
        seguidores,
        seguidores_por_fecha,
        insertSolicitud,
        getSolicitudes,
        getGruposByCapitulo,
        getGrupos,
        getGrupo,
        getMiembros,
        getProyectos,
        getSolicitud,
        buscar,
        getSeguidores,
        seguirGrupo,
        getSeguidoresAnoActual,
        putInfoGrupo,
        getAllGrupos
    }
}