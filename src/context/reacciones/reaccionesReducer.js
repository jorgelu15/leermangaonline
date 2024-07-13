import { act } from 'react-dom/test-utils';
import {
    OBTENER_REACCIONES,
    OBTENER_REACCIONES_USUARIO
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
        default:
            return state;
    }
}