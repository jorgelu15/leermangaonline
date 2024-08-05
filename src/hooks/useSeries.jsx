import { useContext, useEffect } from "react";
import serieContext from "../context/serie/serieContext";
import capituloContext from "../context/capitulo/capituloContext";

export const useSeries = () => {
    const {
        seriesPopulares,
        seriesTrendingSemanal,
        seriesTrendingMensual,
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
        postVisualizacion,
        getAllCapitulos,
        getSeriesTrending,
        editarCapitulo,
        getSeriesPopulares
    } = useContext(serieContext);

    const { capitulo, getCapitulo } = useContext(capituloContext);

    useEffect(() => {
        getSeries();
    }, [])

    return {
        seriesPopulares,
        seriesTrendingSemanal,
        seriesTrendingMensual,
        solicitud,
        stats,
        series,
        serie,
        capitulos,
        capitulo,
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
        postVisualizacion,
        getCapitulo,
        getAllCapitulos,
        getSeriesTrending,
        editarCapitulo,
        getSeriesPopulares
    }
}