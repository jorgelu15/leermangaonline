import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import GruposContext from './gruposContext';
import GruposReducer from './gruposReducer';

import {
    INSERTAR_GRUPO_EXITOSO,
    OBTENER_GRUPO,
    OBTENER_GRUPOS,
    INSERTAR_SOLICITUD,
    OBTENER_SOLICITUDES,
    OBTENER_SOLICITUD,
    ACTUALIZAR_SOLICITUD,
    OBTENER_MIEMBROS,
    MENSAJE_ERROR,
    OBTENER_PROYECTOS,
    OBTENER_SEGUIDORES,
    SEGUIR_GRUPO,
    DEJAR_DE_SEGUIR_GRUPO,
    OBTENER_SEGUIDORES_FECHA_ACTUAL
} from '../../types';

const GruposState = props => {

    const initialState = {
        grupo: null,
        grupos: null,
        proyectos: null,
        miembros: null,
        solicitud: null,
        solicitudes: null,
        seguidores: null,
        seguidores_por_fecha: null,
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
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getGrupo = async (grupo_uid) => {
        try {
            const res = await clienteAxios.get(`/grupo/one/${grupo_uid}`);
            dispatch({
                type: OBTENER_GRUPO,
                payload: res.data.grupo
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getGrupos = async (usuarioId) => {
        try {
            const respuesta = await clienteAxios.get(`/grupo/${usuarioId}/`);
            dispatch({
                type: OBTENER_GRUPOS,
                payload: respuesta.data.grupos
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getGruposByCapitulo = async (id_grupo) => {
        try {
            const respuesta = await clienteAxios.get(`/grupo/capitulo/${id_grupo}/`);
            dispatch({
                type: OBTENER_GRUPOS,
                payload: respuesta.data.grupos
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getAllGrupos = async () => {
        try {
            const respuesta = await clienteAxios.get(`/grupo/all/`);
            dispatch({
                type: OBTENER_GRUPOS,
                payload: respuesta.data.grupos
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const insertSolicitud = async (datos) => {

        try {
            const respuesta = await clienteAxios.post('/grupo/solicitud', datos);
            dispatch({
                type: INSERTAR_SOLICITUD,
                payload: respuesta.data.msg
            })

        } catch (error) {
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getSolicitudes = async (grupoId) => {
        // console.log("llega aca: ", grupoId)
        try {
            const respuesta = await clienteAxios.get(`/grupo/solicitudes/${grupoId}`);
            dispatch({
                type: OBTENER_SOLICITUDES,
                payload: respuesta.data.solicitudes
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getSolicitud = async (id_usuario) => {
        try {
            const respuesta = await clienteAxios.get(`/grupo/solicitud/${id_usuario}`);

            dispatch({
                type: OBTENER_SOLICITUD,
                payload: respuesta.data.solicitud
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const updateSolicitud = async (datos) => {
        try {
            const respuesta = await clienteAxios.put('/grupo/solicitud', datos);

            dispatch({
                type: ACTUALIZAR_SOLICITUD,
                payload: respuesta.data.usuariogrupo
            })
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getMiembros = async (grupoId) => {
        try {

            const res = await clienteAxios.get(`/usuariogrupo/${grupoId}`);
            dispatch({
                type: OBTENER_MIEMBROS,
                payload: res.data.usuarios
            })
        } catch (error) {
        }
    }

    const getProyectos = async (grupoId) => {
        try {
            const res = await clienteAxios.get(`/serie/proyectos/${grupoId}`);

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: res.data.proyectos
            })
        } catch (error) {
            console.log(error)
        }
    }

    const buscar = async (busqueda) => {
        try {
            const res = await clienteAxios.post(`/grupo/busqueda`, busqueda);

            dispatch({
                type: OBTENER_GRUPOS,
                payload: res.data.grupos
            })
        } catch (error) {

        }
    }

    const getSeguidores = async (grupoId) => {
        try {
            const res = await clienteAxios.get(`/seguidor/${grupoId}`);
            dispatch({
                type: OBTENER_SEGUIDORES,
                payload: res.data.seguidores
            })
        } catch (error) {
            console.log(error)
        }
    }

    const seguirGrupo = async (datos) => {
        try {
            const res = await clienteAxios.post(`/seguidor`, datos);
            if (res.data.borrado) {
                dispatch({
                    type: DEJAR_DE_SEGUIR_GRUPO,
                    payload: datos
                })
            } else {
                dispatch({
                    type: SEGUIR_GRUPO,
                    payload: res.data.seguidor
                })
            }
        } catch (error) {

        }
    }

    const getSeguidoresAnoActual = async (grupoId) => {
        try {
            const res = await clienteAxios.get(`/seguidor/seguidoresporfecha/${grupoId}`);
            dispatch({
                type: OBTENER_SEGUIDORES_FECHA_ACTUAL,
                payload: res.data.stats
            })
        } catch (error) {
            console.log(error)
        }
    }

    const putInfoGrupo = async (data, id_grupo) => {
        try {
            const res = await clienteAxios.put(`/grupo/${id_grupo}`, data);


        } catch (error) {

        }
    }

    return (
        <GruposContext.Provider
            value={{
                grupo: state.grupo,
                grupos: state.grupos,
                proyectos: state.proyectos,
                miembros: state.miembros,
                solicitud: state.solicitud,
                solicitudes: state.solicitudes,
                seguidores: state.seguidores,
                seguidores_por_fecha: state.seguidores_por_fecha,
                msg: state.msg,
                insertGrupo,
                insertSolicitud,
                getGrupos,
                getGrupo,
                getAllGrupos,
                getSolicitudes,
                updateSolicitud,
                getMiembros,
                getGruposByCapitulo,
                getProyectos,
                getSolicitud,
                buscar,
                getSeguidores,
                seguirGrupo,
                getSeguidoresAnoActual,
                putInfoGrupo
            }}
        >
            {props.children}
        </GruposContext.Provider>
    )
}

export default GruposState;