import {
    SUBIR_SERIE
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
        case SUBIR_SERIE:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state;
    }
}