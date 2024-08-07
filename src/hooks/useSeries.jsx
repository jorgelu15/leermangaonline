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
        series_verified,
        serie,
        capitulos,
        generosSerie,
        votos,
        seriesFiltradas,
        seriesVerifiedFiltradas,
        visualizaciones,
        getSeries,
        getSeriesVerified,
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
        getSeriesPopulares,
        validarSerie
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
        series_verified,
        serie,
        capitulos,
        capitulo,
        generosSerie,
        votos,
        seriesFiltradas,
        seriesVerifiedFiltradas,
        visualizaciones,
        getSeries,
        getSeriesVerified,
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
        getSeriesPopulares,
        validarSerie
    }
}