import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import DirectorioContext from './directorioContext';
import DirectorioReducer from './directorioReducer';

import {
    OBTENER_SERIES,
    FILTRAR
} from '../../types';


const DirectorioState = props => {

    const initialState = {
        series: null,
        filtrados: null,
        msg: null
    }

    const [state, dispatch] = useReducer(DirectorioReducer, initialState);

    const getSeries = async () => {
        try {
            const respuesta = await clienteAxios.get(`/serie`);
            dispatch({
                type: OBTENER_SERIES,
                payload: respuesta.data.series
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const filtrar = async (filtros) => {
        try {
            const res = await clienteAxios.post(`/serie/filtros`, {
                busquedaAvanzada: filtros
            });
            
            dispatch({
                type: FILTRAR,
                payload: res.data.seriesFounded
            })

        } catch (error) {
            console.log(error)
        }
    }

    const buscador = async (busqueda) => {
        
        try {
            const res = await clienteAxios.post(`/serie/busqueda`, {
                busquedaAvanzada: busqueda
            });
            
            dispatch({
                type: FILTRAR,
                payload: res.data.seriesFounded
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <DirectorioContext.Provider
            value={{
                series: state.series,
                filtrados: state.filtrados,
                msg: state.msg,
                getSeries,
                filtrar,
                buscador
            }}
        >
            {props.children}
        </DirectorioContext.Provider>
    )
}

export default DirectorioState;