import { useContext, useEffect } from "react";
import serieContext from "../context/serie/serieContext";

export const useSeries = () => {
    const { series, serie, seriesFiltradas, getSeries, getSerie } = useContext(serieContext);

    useEffect(() => {
        getSeries();
    }, [])

    return {
        series,
        serie,
        seriesFiltradas,
        getSeries,
        getSerie
    }
}