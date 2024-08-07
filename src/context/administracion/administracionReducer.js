import { act } from 'react-dom/test-utils';
import {
    OBTENER_IMAGENES_SLIDER,
    SUBIR_IMAGEN_SLIDER,
    BORRAR_IMAGEN_SLIDER,
    OBTENER_NOTICIAS,
    SUBIR_NOTICIA,
    ACTUALIZAR_NOTICIA,
    BORRAR_NOTICIA
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
        case OBTENER_NOTICIAS:
            return{
                ...state,
                noticias: action.payload
            }
        case SUBIR_NOTICIA:
            return{
                ...state,
                noticias: [...state.noticias, action.payload]
            }
        case ACTUALIZAR_NOTICIA:
            return{
                ...state,
                noticias: state.noticias.map((item) => item.id_noticia === action.payload.id_noticia ? {...item, titulo: action.payload.tituloEdit, contenido: action.payload.descripcionEdit} : item )
            }
        case BORRAR_NOTICIA:
            return{
                ...state,
                noticias: state.noticias.filter((item) => item.id_noticia !== action.payload)
            }
        default:
            return state;
    }
}