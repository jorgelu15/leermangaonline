    import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import SerieContext from './serieContext';
import SerieReducer from './serieReducer';

import {
    OBTENER_SERIE,
    OBTENER_SERIES,
    SUBIR_SERIE
} from '../../types';

const SerieState = props => {

    const initialState = {
        msg: null,
        series: null,
        serie: null,
        seriesFiltradas: null
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

    const getSeries = async () => {
        try {
            const res = await clienteAxios.get(`/serie`)

            dispatch({
                type: OBTENER_SERIES,
                payload: res.data.series
            })
        } catch (error) {
            
        }
    }

    const getSerie  = async  (serie_uid) => {
        try {
            const res = await clienteAxios.get(`/serie/${serie_uid}`);

            dispatch({
                type:  OBTENER_SERIE,
                payload: res.data.serie
            })
        } catch (error) {
            
        }
    }

    return (
        <SerieContext.Provider
            value={{
                msg: state.msg,
                series: state.series,
                seriesFiltradas: state.seriesFiltradas,
                serie: state.serie,
                getSeries,
                getSerie,
                subirSerie
            }}
        >
            {props.children}
        </SerieContext.Provider>
    )
}

export default SerieState;