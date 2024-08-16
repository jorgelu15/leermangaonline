import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import ReaccionesContext from './reaccionesContext';
import ReaccionesReducer from './reaccionesReducer';

import {
    OBTENER_REACCIONES,
    SUBIR_REACCION,
    OBTENER_REACCIONES_USUARIO,
    OBTENER_SERIES_POR_REACCION_USUARIO,
    OBTENER_REACCIONES_SERIE_USUARIO
} from '../../types';

const ReaccionesState = props => {

    const initialState = {
        msg: null,
        reacciones: [],
        reacciones_usuario: [],
        reaccionesPorUsuario: [],
        reaccionesSerieUsuario: []
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

    const getReaccionesSerieUsuario = async (id_serie, id_usuario) => {
        try {
            const reacciones = await clienteAxios.get(`/reaccion/${id_usuario}/${id_serie}`)
            dispatch({
                type: OBTENER_REACCIONES_SERIE_USUARIO,
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

    const postReaccion = async (datos) => {
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
            const res = await clienteAxios.get(`/reaccion/usuario/${id_usuario}`)
            dispatch({
                type: OBTENER_REACCIONES_USUARIO,
                payload: res.data.series
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
                reaccionesPorUsuario: state.reaccionesPorUsuario,
                reaccionesSerieUsuario: state.reaccionesSerieUsuario,
                getReacciones,
                getReaccionesSerieUsuario,
                setReaccion,
                getReaccionesUsuario,
                getSeriesPorReaccionUsuario,
                postReaccion
            }}
        >
            {props.children}
        </ReaccionesContext.Provider>
    )
}

export default ReaccionesState;