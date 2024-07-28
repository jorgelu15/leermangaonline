import { useContext, useEffect } from "react";
import serieContext from "../context/serie/serieContext";

export const useSeries = () => {
    const {
        solicitud,
        stats,
        series,
        serie,
        capitulos,
        generosSerie,
        votos,
        seriesFiltradas,
        visualizaciones,
        getSeries,
        getSerie,
        getGeneroSerie,
        subirVotoSerie,
        getPromVotoSerie,
        getCapitulosSerie,
        getStatsSerie,
        getTypeSolicitudes,
        getVisualizacion,
        postVisualizacion
    } = useContext(serieContext);

    useEffect(() => {
        getSeries();
    }, [])

    return {
        solicitud,
        stats,
        series,
        serie,
        capitulos,
        generosSerie,
        votos,
        seriesFiltradas,
        visualizaciones,
        getSeries,
        getSerie,
        getGeneroSerie,
        getPromVotoSerie,
        subirVotoSerie,
        getCapitulosSerie,
        getStatsSerie,
        getTypeSolicitudes,
        getVisualizacion,
        postVisualizacion
    }
}