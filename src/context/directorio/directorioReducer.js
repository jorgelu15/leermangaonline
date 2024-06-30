import {
    OBTENER_SERIES,
    FILTRAR,
    MENSAJE_ERROR
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_SERIES:
            return {
                ...state,
                series: action.payload,
                filtrados: action.payload
            }
        case FILTRAR:
            return {
                ...state,
                filtrados: action.payload
            }
        case MENSAJE_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state;
    }
}