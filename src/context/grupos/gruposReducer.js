import {
    INSERTAR_GRUPO_EXITOSO,
    OBTENER_GRUPO,
    OBTENER_GRUPOS,
    INSERTAR_SOLICITUD,
    OBTENER_SOLICITUDES,
    OBTENER_SOLICITUD,
    ACTUALIZAR_SOLICITUD,
    OBTENER_MIEMBROS,
    MENSAJE_ERROR,
    OBTENER_PROYECTOS,
    OBTENER_SEGUIDORES,
    SEGUIR_GRUPO,
    DEJAR_DE_SEGUIR_GRUPO,
    OBTENER_SEGUIDORES_FECHA_ACTUAL
} from '../../types';

export default (state, action) => {

    switch (action.type) {
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
                msg: action.payload
            }
        case OBTENER_SOLICITUDES:
            return {
                ...state,
                solicitudes: action.payload
            }
        case OBTENER_SOLICITUD:
            return {
                ...state,
                solicitud: action.payload
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
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        case MENSAJE_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        case OBTENER_SEGUIDORES:
            return {
                ...state,
                seguidores: action.payload
            }
        case SEGUIR_GRUPO:
            return {
                ...state,
                seguidores: [...state.seguidores, action.payload]
            }
        case DEJAR_DE_SEGUIR_GRUPO:
            return {
                ...state,
                seguidores: state.seguidores.filter(item => !(item.id_usuario === action.payload.id_usuario && item.id_grupo === action.payload.id_grupo))
            }
        case OBTENER_SEGUIDORES_FECHA_ACTUAL:
            return {
                ...state,
                seguidores_por_fecha: action.payload
            }
        default:
            return state;
    }
}