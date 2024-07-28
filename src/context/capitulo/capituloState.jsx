import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import CapituloContext from './capituloContext';
import CapituloReducer from './capituloReducer';

import { MENSAJE_ERROR, OBTENER_CAPITULOS } from '../../types';

const CapituloState = props => {

    const initialState = {
        msg: null,
        capitulos: []
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
            const res = await clienteAxios.get(`/capitulos/${serie_uid}`)
            dispatch({
                type: OBTENER_CAPITULOS,
                payload: res.data.capitulos
            })

        } catch (error) {

        }
    }

    return (
        <CapituloContext.Provider
            value={{
                msg: state.msg,
                subirGrupoCapitulo,
                subirCapitulo,
                getCapitulos
            }}
        >
            {props.children}
        </CapituloContext.Provider>
    )
}

export default CapituloState;