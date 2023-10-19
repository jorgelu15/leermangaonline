import {
    INSERTAR_GRUPO_EXITOSO,
    OBTENER_GRUPO,
    OBTENER_GRUPOS,
    INSERTAR_SOLICITUD,
    OBTENER_SOLICITUDES,
    ACTUALIZAR_SOLICITUD,
    OBTENER_MIEMBROS,
    MENSAJE_ERROR
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
        case INSERTAR_GRUPO_EXITOSO:
            return {
                ...state,
                grupo: action.payload.grupo,
                grupos: [...state.grupos, action.payload.grupo]
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
        case INSERTAR_SOLICITUD:
            return {
                ...state,
                solicitud: action.payload,
                solicitudes: [...state.solicitudes, action.payload]
            }
        case OBTENER_SOLICITUDES:
            return {
                ...state,
                solicitudes: action.payload
            }
        case ACTUALIZAR_SOLICITUD:
            return {
                ...state,
                solicitudes: state.solicitudes.map((item) => item.id === action.payload.id ? action.payload : item)
            }
        case OBTENER_MIEMBROS:
            return {
                ...state,
                miembros: action.payload
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