import {
    OBTENER_SERIE,
    OBTENER_SERIES,
    SUBIR_SERIE
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
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
        default:
            return state;
    }
}