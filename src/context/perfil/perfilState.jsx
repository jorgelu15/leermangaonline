    import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import PerfilContext from './perfilContext';
import PerfilReducer from './perfilReducer';

import {
    OBTENER_PERFIL,
    ACTUALIZAR_PERFIL,
    MENSAJE_ERROR
} from '../../types';

const PerfilState = props => {

    const initialState = {
        perfil: null,
        msg: null
    }

    const [state, dispatch] = useReducer(PerfilReducer, initialState);

    const getPerfil = async (id) => {
        try {
            const respuesta = await clienteAxios.get(`/perfil/${id}/`);

            dispatch({
                type: OBTENER_PERFIL,
                payload: respuesta.data.perfil
            })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const updatePerfil = async (usuarioId, file) => {
        try {
            const respuesta = await clienteAxios.put(`/usuarios/${usuarioId}/`, file);
            const respuesta2 = await clienteAxiosUpload.post(`/upload`, file);
            dispatch({
                type: ACTUALIZAR_PERFIL,
                payload: respuesta.data.perfil
            })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    return (
        <PerfilContext.Provider
            value={{
                perfil: state.perfil,
                msg: state.msg,
                getPerfil,
                updatePerfil,
            }}
        >
            {props.children}
        </PerfilContext.Provider>
    )
}

export default PerfilState;