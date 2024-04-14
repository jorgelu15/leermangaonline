import {
    OBTENER_GENEROS_SERIE,
    OBTENER_SERIE,
    OBTENER_SERIES,
    OBTENER_VOTOS,
    SUBIR_SERIE
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
        case OBTENER_SERIE:
            return {
                ...state,
                serie: action.payload
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
        default:
            return state;
    }
}