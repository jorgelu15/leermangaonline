    import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import SerieContext from './serieContext';
import SerieReducer from './serieReducer';

import {
    SUBIR_SERIE
} from '../../types';

const SerieState = props => {

    const initialState = {
        msg: null
    }

    const [state, dispatch] = useReducer(SerieReducer, initialState);

    const subirSerie = async (file) => {
        try {
            const respuesta = await clienteAxios.post(`/serie`, file);
            // console.log(respuesta);
            const respuesta2 = await clienteAxiosUpload.post(`/uploadSerie`, file);
            // dispatch({
            //     type: SUBIR_SERIE,
            //     payload: respuesta.data.perfil
            // })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return (
        <SerieContext.Provider
            value={{
                msg: state.msg,
                subirSerie
            }}
        >
            {props.children}
        </SerieContext.Provider>
    )
}

export default SerieState;