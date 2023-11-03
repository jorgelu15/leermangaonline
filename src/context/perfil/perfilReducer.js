import {
    OBTENER_PERFIL,
    ACTUALIZAR_PERFIL,
    OBTENER_MIEMBROS,
    MENSAJE_ERROR
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
        case OBTENER_PERFIL:
            return {
                ...state,
                perfil: action.payload
            }
        case ACTUALIZAR_PERFIL:
            return {
                ...state,
                perfil: action.payload
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