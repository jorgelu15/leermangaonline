import { act } from 'react-dom/test-utils';
import {
    OBTENER_IMAGENES_SLIDER
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_IMAGENES_SLIDER:
            return {
                ...state,
                slider: action.payload,
            }
        default:
            return state;
    }
}