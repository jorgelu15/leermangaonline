import {
    REGISTRO_EXITOSO,
    LOGIN_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION,
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                token: action.payload.token,
                cargando: false
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                ...state,
                autenticado: false,
                token: null,
                usuario: null,
                msg: null,
                cargando: false
            }
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            return{
                ...state,
                msg: action.payload,
                cargando: false
            }
        case USUARIO_AUTENTICADO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false,
                rol: parseInt(action.payload.rol)
            }
        default:
            return state;
    }
}