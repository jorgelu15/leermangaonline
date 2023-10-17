import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION,
} from '../../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        msg: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const signIn = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/auth/login', datos);

            localStorage.setItem('token', respuesta.data.token);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
            
            usuarioAutenticado();
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const signUp = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/auth/signup/', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
        } catch (error) {
  
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const usuarioAutenticado = async () => {
        
        const token = localStorage.getItem('token');
        tokenAuth(token);

        try {
            const respuesta = await clienteAxios.get('/auth/verifyauth/');
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            logOut();
        }
    }

    const logOut = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                msg: state.msg,
                cargando: state.cargando,
                signIn,
                signUp,
                usuarioAutenticado,
                logOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;