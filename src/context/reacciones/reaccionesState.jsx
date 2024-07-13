import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import ReaccionesContext from './reaccionesContext';
import ReaccionesReducer from './reaccionesReducer';

import {
    OBTENER_REACCIONES,
    SUBIR_REACCION,
    OBTENER_REACCIONES_USUARIO,
    OBTENER_SERIES_POR_REACCION_USUARIO
} from '../../types';

const ReaccionesState = props => {

    const initialState = {
        msg: null,
        reacciones: null,
        reacciones_usuario: null
    }

    const [state, dispatch] = useReducer(ReaccionesReducer, initialState);

    const getReacciones = async (id_serie) => {
        try {
            const reacciones = await clienteAxios.get(`/reaccion/${id_serie}`)

            dispatch({
                type: OBTENER_REACCIONES,
                payload: reacciones.data.reacciones
            })
        } catch (error) {
            
        }
    }

    const setReaccion = async (datos) => {
        try {
            const respuesta = await clienteAxios.put('/reaccion', datos);
            
            dispatch({
                type: SUBIR_REACCION,
                payload: respuesta.data
            })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getReaccionesUsuario = async (id_usuario) => {
        try {
            const reacciones = await clienteAxios.get(`/reaccion/usuario/${id_usuario}`)

            dispatch({
                type: OBTENER_REACCIONES_USUARIO,
                payload: reacciones.data.reacciones
            })
        } catch (error) {
            
        }
    }

    const getSeriesPorReaccionUsuario = async (id_usuario, tipo) => {
        try {
            const reacciones = await clienteAxios.get(`/reaccion/usuario/${id_usuario}/${tipo}`)

            dispatch({
                type: OBTENER_SERIES_POR_REACCION_USUARIO,
                payload: reacciones.data.reacciones
            })
        } catch (error) {
            
        }
    }

    return (
        <ReaccionesContext.Provider
            value={{
                msg: state.msg,
                reacciones: state.reacciones,
                reacciones_usuario: state.reacciones_usuario,
                getReacciones,
                setReaccion,
                getReaccionesUsuario,
                getSeriesPorReaccionUsuario
            }}
        >
            {props.children}
        </ReaccionesContext.Provider>
    )
}

export default ReaccionesState;