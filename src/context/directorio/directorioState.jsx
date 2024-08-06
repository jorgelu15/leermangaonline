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
    
            // Verifica si hay resultados
            const seriesFounded = res.data.seriesFounded || [];
            
            dispatch({
                type: FILTRAR,
                payload: seriesFounded
            });
    
        } catch (error) {
            console.log(error);
            dispatch({
                type: FILTRAR,
                payload: []
            });
        }
    };
    
    const buscador = async (busqueda) => {
        try {
            const res = await clienteAxios.post(`/serie/busqueda`, {
                busquedaAvanzada: busqueda
            });
    
            // Verifica si hay resultados
            const seriesFounded = res.data.seriesFounded || [];
            
            dispatch({
                type: FILTRAR,
                payload: seriesFounded
            });
    
        } catch (error) {
            console.log(error);
            dispatch({
                type: FILTRAR,
                payload: []
            });
        }
    };

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