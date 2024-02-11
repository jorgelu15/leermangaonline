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
                    const searchValue = action.payload[0].toLowerCase();
                    const nombreIncluido = item.nombre.toLowerCase().includes(searchValue);
                    const filtrosIncluidos = action.payload[1].length ? action.payload[1].every(genero => item.generos.includes(genero)) : 1;
                    console.log(item.generos.every(genero => action.payload[1].includes(genero)));
                    return nombreIncluido & filtrosIncluidos;
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