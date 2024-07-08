import { useContext, useEffect } from "react";
import gruposContext from "../context/grupos/gruposContext";

export const useGrupos = () => {
    const {
        grupos,
        grupo,
        proyectos,
        miembros,
        getGruposByCapitulo,
        getGrupos,
        getMiembros,
        getProyectos,
        buscar
    } = useContext(gruposContext);


    return {
        grupos,
        grupo,
        proyectos,
        miembros,
        getGruposByCapitulo,
        getGrupos,
        getMiembros,
        getProyectos,
        buscar
    }
}