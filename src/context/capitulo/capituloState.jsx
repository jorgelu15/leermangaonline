import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import CapituloContext from './capituloContext';
import CapituloReducer from './capituloReducer';

import {
    MENSAJE_ERROR,
    OBTENER_CAPITULOS,
    OBTENER_CAPITULO,
} from '../../types';

const CapituloState = props => {

    const initialState = {
        msg: null,
        capitulos: [],
        capitulo: null
    }

    const [state, dispatch] = useReducer(CapituloReducer, initialState);

    const subirGrupoCapitulo = async (file) => {
        try {
            const respuesta = await clienteAxios.post(`/capitulo/grupoCapitulo`, file);

            const respuesta2 = await clienteAxiosUpload.post(`/uploadCapitulo`, file);

            return { data: { status: 200 } }
        } catch (error) {

            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const subirCapitulo = async (data) => {
        try {
            const res = await clienteAxios.post(`/capitulo`, data);
            dispatch({
                type: MENSAJE_ERROR,
                payload: res.data.msg
            })
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    const getCapitulos = async (serie_uid) => {
        try {
            const res = await clienteAxios.get(`/capitulo/capitulos/${serie_uid}`)
            dispatch({
                type: OBTENER_CAPITULOS,
                payload: res.data.capitulos
            })

        } catch (error) {

        }
    }

    const getCapitulo = async (id_capitulo) => {
        try {
            const res = await clienteAxios.get(`/capitulo/${id_capitulo}`)
            dispatch({
                type: OBTENER_CAPITULO,
                payload: res.data.capitulo
            })

        } catch (error) {

        }
    }

    return (
        <CapituloContext.Provider
            value={{
                capitulo: state.capitulo,
                msg: state.msg,
                subirGrupoCapitulo,
                subirCapitulo,
                getCapitulos,
                getCapitulo
            }}
        >
            {props.children}
        </CapituloContext.Provider>
    )
}

export default CapituloState;