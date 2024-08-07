import { act } from 'react-dom/test-utils';
import {
    OBTENER_CAPITULOS,
    OBTENER_GENEROS_SERIE,
    OBTENER_SERIE,
    OBTENER_SERIES,
    OBTENER_STATS,
    OBTENER_TIPO_SOLICITUDES,
    OBTENER_VOTOS,
    SUBIR_SERIE,
    SUBIR_VOTO_SERIE,
    OBTENER_VISUALIZACIONES_SERIE,
    INSERTAR_VISUALIZACIONE_SERIE,
    OBTENER_SERIES_TRENDING_SEMANAL,
    OBTENER_SERIES_TRENDING_MENSUAL,
    EDITAR_CAPITULO,
    OBTENER_SERIES_POPULARES,
    VALIDAR_SERIE,
    OBTENER_SERIES_VERIFIED
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case SUBIR_SERIE:
            return {
                ...state,
                msg: action.payload
            }
        case OBTENER_SERIES:
            return {
                ...state,
                series: action.payload,
                seriesFiltradas: action.payload
            }
        case OBTENER_SERIES_VERIFIED:
            return {
                ...state,
                series_verified: action.payload,
                seriesVerifiedFiltradas: action.payload
            }
        case OBTENER_SERIE:
            return {
                ...state,
                serie: action.payload
            }
        case OBTENER_CAPITULOS:
            return {
                ...state,
                capitulos: action.payload
            }
        case OBTENER_GENEROS_SERIE:
            return {
                ...state,
                generosSerie: action.payload
            }
        case OBTENER_VOTOS:
            return {
                ...state,
                votos: action.payload
            }
        case OBTENER_STATS:
            return {
                ...state,
                stats: action.payload
            }
        case SUBIR_VOTO_SERIE:
            return {
                ...state,
                votos: action.payload.serie,
                msg: action.payload.msg
            }
        case OBTENER_TIPO_SOLICITUDES:
            return {
                ...state,
                solicitud: action.payload
            }
        case OBTENER_VISUALIZACIONES_SERIE:
            return {
                ...state,
                visualizaciones: action.payload
            }
        case OBTENER_SERIES_TRENDING_SEMANAL:
            return {
                ...state,
                seriesTrendingSemanal:  action.payload
            }
        case OBTENER_SERIES_TRENDING_MENSUAL:
            return {
                ...state,
                seriesTrendingMensual:  action.payload
            }
        case EDITAR_CAPITULO:
            return {
                ...state,
                capitulos:  state.capitulos.map((capitulo) => capitulo.id_capitulo === action.payload.id_capitulo ? ({...capitulo, ...action.payload}) : capitulo )
            }
        case OBTENER_SERIES_POPULARES:
            return{
                ...state,
                seriesPopulares: action.payload
            }
        case VALIDAR_SERIE:
            return{
                ...state,
                series_verified: state.series_verified.map((item) => item.id_serie === action.payload.id_serie ? {...item, verificacion: action.payload.verificacion} : item)
            }
        default:
            return state;
    }
}