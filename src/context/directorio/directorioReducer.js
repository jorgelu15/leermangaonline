import {
    OBTENER_SERIES,
    FILTRAR,
    MENSAJE_ERROR
} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_SERIES:
            return {
                ...state,
                series: action.payload,
                filtrados: action.payload
            }
        case FILTRAR:
            return {
                ...state,
                filtrados: state.series.filter((item) => {
                    const searchValue = action.payload.toLowerCase();
                    const nombreIncluido = item.nombre.toLowerCase().includes(searchValue);
                    return nombreIncluido;
                })
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