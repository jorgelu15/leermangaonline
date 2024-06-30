import { useContext, useEffect } from "react";
import generoContext from "../context/genero/generoContext";

export const useGenero = () => {
    const {
        genero,
        generos,
        getGeneros,
        getGenero,
        subirGenero,
    } = useContext(generoContext);

    useEffect(() => {
        getGeneros();
    }, [])

    return {
        genero,
        generos
    }
}