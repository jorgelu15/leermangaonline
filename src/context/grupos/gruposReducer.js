import {
    INSERTAR_GRUPO_EXITOSO,
    REGISTRO_GRUPO_ERROR,
    OBTENER_GRUPO,
    OBTENER_GRUPOS,
    OBTENER_GRUPOS_ERROR,
    INSERTAR_SOLICITUD,
    INSERTAR_SOLICITUD_ERROR
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
        case INSERTAR_GRUPO_EXITOSO:
            return {
                ...state,
                grupo: action.payload.grupo,
                grupos: [...state.grupos, action.payload.grupo]
            }
        case REGISTRO_GRUPO_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        case OBTENER_GRUPO:
            return {
                ...state,
                grupo: action.payload
            }
        case OBTENER_GRUPOS:
            return {
                ...state,
                grupos: action.payload
            }
        case OBTENER_GRUPOS_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        case INSERTAR_SOLICITUD:
            return {
                ...state,
                solicitud: action.payload
            }
        case INSERTAR_SOLICITUD_ERROR:
            return {
                ...state,
                msg: action.payload
            }
            
        default:
            return state;
    }
}