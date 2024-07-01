import { act } from 'react-dom/test-utils';
import {
    OBTENER_PAGINAS,
    SET_CAPITULO_ID
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_PAGINAS:
            return {
                ...state,
                paginas: action.payload,
            }
        case SET_CAPITULO_ID:
            return {
                ...state,
                capitulo_id: action.payload.capitulo_id,
                id_grupo: action.payload.id_grupo,
                serie_uid: action.payload.serie_uid,
                numCap: action.payload.numCap,
            }
        default:
            return state;
    }
}