import { useContext, useEffect } from "react";
import serieContext from "../context/serie/serieContext";

export const useSeries = () => {
    const { series, serie, generosSerie, votos, seriesFiltradas, getSeries, getSerie, getGeneroSerie, getPromVotoSerie } = useContext(serieContext);

    useEffect(() => {
        getSeries();
    }, [])

    return {
        series,
        serie,
        generosSerie,
        votos,
        seriesFiltradas,
        getSeries,
        getSerie,
        getGeneroSerie,
        getPromVotoSerie
    }
}