import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import GruposContext from './gruposContext';
import GruposReducer from './gruposReducer';

import {
    INSERTAR_GRUPO_EXITOSO,
    REGISTRO_GRUPO_ERROR,
    OBTENER_GRUPO,
    OBTENER_GRUPOS,
    OBTENER_GRUPOS_ERROR,
    INSERTAR_SOLICITUD,
    INSERTAR_SOLICITUD_ERROR
} from '../../types';

const GruposState = props => {

    const initialState = {
        grupo: null,
        grupos: null,
        solicitud: null,
        msg: null
    }

    const [state, dispatch] = useReducer(GruposReducer, initialState);


    const insertGrupo = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/grupo/add/', datos);
            dispatch({
                type: INSERTAR_GRUPO_EXITOSO,
                payload: respuesta.data
            })
        } catch (error) {
  
            dispatch({
                type: REGISTRO_GRUPO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getGrupo = async (id_grupo) => {
        try {
            dispatch({
                type: OBTENER_GRUPO,
                payload: state.grupos.find((item) => item.id_grupo == id_grupo)
            })
        } catch (error) {
  
            dispatch({
                type: OBTENER_GRUPOS_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getGrupos = async (id_usuario) => {
        try {
            const respuesta = await clienteAxios.get(`/grupo/${id_usuario}/`);
            dispatch({
                type: OBTENER_GRUPOS,
                payload: respuesta.data.grupos
            })
        } catch (error) {
  
            dispatch({
                type: OBTENER_GRUPOS_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getAllGrupos = async (id_usuario) => {
        try {
            const respuesta = await clienteAxios.get(`/grupo/all/`);
            dispatch({
                type: OBTENER_GRUPOS,
                payload: respuesta.data.grupos
            })
        } catch (error) {
  
            dispatch({
                type: OBTENER_GRUPOS_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const insertSolicitud = async (datos) => {
        
        try {
            const respuesta = await clienteAxios.post('/usuariogrupo/', datos);
            
            dispatch({
                type: INSERTAR_SOLICITUD,
                payload: respuesta.data.usuariogrupo
            })

        } catch (error) {
            dispatch({
                type: INSERTAR_SOLICITUD_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return (
        <GruposContext.Provider
            value={{
                grupo: state.grupo,
                grupos: state.grupos,
                solicitud: state.solicitud,
                msg: state.msg,
                insertGrupo,
                insertSolicitud,
                getGrupos,
                getGrupo,
                getAllGrupos,
            }}
        >
            {props.children}
        </GruposContext.Provider>
    )
}

export default GruposState;