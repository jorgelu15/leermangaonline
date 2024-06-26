import { useContext, useEffect } from "react";
import serieContext from "../context/serie/serieContext";

export const useSeries = () => {
    const {
        series,
        serie,
        capitulos,
        generosSerie,
        votos,
        seriesFiltradas,
        getSeries,
        getSerie,
        getGeneroSerie,
        subirVotoSerie,
        getPromVotoSerie,
        getCapitulosSerie
    } = useContext(serieContext);

    useEffect(() => {
        getSeries();
    }, [])

    return {
        series,
        serie,
        capitulos,
        generosSerie,
        votos,
        seriesFiltradas,
        getSeries,
        getSerie,
        getGeneroSerie,
        getPromVotoSerie,
        subirVotoSerie,
        getCapitulosSerie
    }
}