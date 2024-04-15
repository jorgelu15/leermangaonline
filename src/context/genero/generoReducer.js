import { 
    OBTENER_GENERO,
    OBTENER_GENEROS,
    SUBIR_GENERO
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case SUBIR_GENERO:
            return {
                ...state,
                msg: action.payload
            }
        case OBTENER_GENERO:
            return {
                ...state,
                genero: action.payload
            }
        case OBTENER_GENEROS:
            return {
                ...state,
                generos: action.payload
            }
        default:
            return state;
    }
}