import { act } from 'react-dom/test-utils';
import {
    OBTENER_IMAGENES_SLIDER,
    SUBIR_IMAGEN_SLIDER,
    BORRAR_IMAGEN_SLIDER
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_IMAGENES_SLIDER:
            return {
                ...state,
                slider: action.payload,
            }
        case SUBIR_IMAGEN_SLIDER:
            return {
                ...state,
                slider: [...state.slider, action.payload],
            }
        case BORRAR_IMAGEN_SLIDER:
            return {
                ...state,
                slider: state.slider.filter((image) => image.id_slider !== action.payload),
            }
        default:
            return state;
    }
}