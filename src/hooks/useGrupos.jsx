import { useContext, useEffect } from "react";
import gruposContext from "../context/grupos/gruposContext";

export const useGrupos = () => {
    const {
        grupos,
        grupo,
        miembros,
        getGruposByCapitulo,
        getGrupos,
        getMiembros
    } = useContext(gruposContext);


    return {
        grupos,
        grupo,
        miembros,
        getGruposByCapitulo,
        getGrupos,
        getMiembros
    }
}