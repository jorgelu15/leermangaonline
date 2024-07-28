import { MENSAJE_ERROR, SUBIR_SERIE, OBTENER_CAPITULO } from '../../types';

export default (state, action) => {

    switch (action.type) {
        case SUBIR_SERIE:
            return {
                ...state,
                msg: action.payload
            }
        case OBTENER_CAPITULO:
            return {
                ...state,
                capitulo: action.payload
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