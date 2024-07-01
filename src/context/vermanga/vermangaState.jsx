    import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import VermangaContext from './vermangaContext';
import VermangaReducer from './vermangaReducer';

import {
    OBTENER_PAGINAS,
    SET_CAPITULO_ID
} from '../../types';

const VermangaState = props => {

    const initialState = {
        msg: null,
        capitulo_id: null,
        id_grupo: null,
        serie_uid: null,
        numCap: null,
        paginas: null
    }

    const [state, dispatch] = useReducer(VermangaReducer, initialState);

    const setCapituloInfo = async (capitulo_id, id_grupo, serie_uid, numCap) => {
        dispatch({
            type: SET_CAPITULO_ID,
            payload: {capitulo_id, id_grupo, serie_uid, numCap}
        })
    }

    const getCapitulo = async (capitulo_id) => {
        try {
            const res = await clienteAxios.get(`/capitulo/paginas/${capitulo_id}`)

            dispatch({
                type: OBTENER_PAGINAS,
                payload: res.data.paginas
            })
        } catch (error) {
            
        }
    }


    return (
        <VermangaContext.Provider
            value={{
                msg: state.msg,
                capitulo_id: state.capitulo_id,
                id_grupo: state.id_grupo,
                serie_uid: state.serie_uid,
                numCap: state.numCap,
                paginas: state.paginas,
                setCapituloInfo,
                getCapitulo
            }}
        >
            {props.children}
        </VermangaContext.Provider>
    )
}

export default VermangaState;