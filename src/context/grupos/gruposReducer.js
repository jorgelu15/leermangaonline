import {
    INSERTAR_GRUPO_EXITOSO,
    REGISTRO_GRUPO_ERROR,
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
        case INSERTAR_GRUPO_EXITOSO:
            return {
                ...state,
                grupo: action.payload.grupo
            }
        case REGISTRO_GRUPO_ERROR:
            return {
                ...state,
                msg: action.payload
            }
            
        default:
            return state;
    }
}