import { act } from 'react-dom/test-utils';
import {
    OBTENER_REACCIONES,
    OBTENER_REACCIONES_SERIE_USUARIO,
    OBTENER_REACCIONES_USUARIO,
    OBTENER_SERIES_POR_REACCION_USUARIO,
    SUBIR_REACCION
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_REACCIONES:
            return {
                ...state,
                reacciones: action.payload,
            }
        case OBTENER_REACCIONES_USUARIO:
            return {
                ...state,
                reacciones_usuario: action.payload,
            }
        case OBTENER_SERIES_POR_REACCION_USUARIO:
            return {
                ...state,
                reaccionesPorUsuario: action.payload
            }
        case OBTENER_REACCIONES_SERIE_USUARIO:
            return {
                ...state,
                reaccionesSerieUsuario: action.payload
            }
        default:
            return state;
    }
}