import { useContext, useEffect } from "react";
import gruposContext from "../context/grupos/gruposContext";

export const useGrupos = () => {
    const {
        grupos,
        getGruposByCapitulo
    } = useContext(gruposContext);


    return {
        grupos,
        getGruposByCapitulo
    }
}