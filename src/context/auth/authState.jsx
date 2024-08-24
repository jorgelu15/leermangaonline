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
    FORGOT_PASSWORD,
    VALIDAR_CODIGO,
    CHANGE_PASSWORD,
} from '../../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        msg: null,
        cargando: true,
        status: null,
        codigo_status: null,
        cambio_password_status: null
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

            const status = respuesta.data ? respuesta.status : usuarioAutenticado();
            return status;
        } catch (error) {
            const errorMessage = error.response?.data?.msg || 'Error desconocido';
            throw new Error(errorMessage); // Lanzar el error para que pueda ser manejado en la llamada de la función

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
            return respuesta.status;
        } catch (error) {
            logOut();
        }
    }

    const logOut = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    const forgotpassword = async (correo) => {
        try {
            const respuesta = await clienteAxios.post('/auth/forgotpassword/', correo);
            dispatch({
                type: FORGOT_PASSWORD,
                payload: respuesta.status
            })
        } catch (error) {
            console.log(error)
        }
    }

    const validarCodigo = async (correo, codigo) => {
        try {
            const respuesta = await clienteAxios.post('/auth/validarcodigo/', {correo, codigo});
            dispatch({
                type: VALIDAR_CODIGO,
                payload: respuesta.status
            })
        } catch (error) {
            console.log(error)
        }
    }

    const changePassword = async (correo, codigo, password) => {
        try {
            const respuesta = await clienteAxios.post('/auth/changepassword/', {correo: correo, codigo: codigo, password: password});
            console.log(respuesta)
            dispatch({
                type: CHANGE_PASSWORD,
                payload: respuesta.status
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                msg: state.msg,
                cargando: state.cargando,
                status: state.status,
                codigo_status: state.codigo_status,
                cambio_password_status: state.cambio_password_status,
                signIn,
                signUp,
                usuarioAutenticado,
                logOut,
                forgotpassword,
                validarCodigo,
                changePassword
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;