import { useContext, useEffect } from "react";
import gruposContext from "../context/grupos/gruposContext";

export const useGrupos = () => {
    const {
        grupos,
        grupo,
        getGruposByCapitulo,
        getGrupos
    } = useContext(gruposContext);


    return {
        grupos,
        grupo,
        getGruposByCapitulo,
        getGrupos
    }
}