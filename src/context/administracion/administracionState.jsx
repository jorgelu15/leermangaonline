    import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import AdministracionContext from './administracionContext';
import AdministracionReducer from './administracionReducer';

import {
    OBTENER_IMAGENES_SLIDER,
    
} from '../../types';

const AdministracionState = props => {

    const initialState = {
        msg: null,
        slider: null,
    }

    const [state, dispatch] = useReducer(AdministracionReducer, initialState);

    const getSliderImages = async () => {
        try {
            const res = await clienteAxios.get(`/slider`)

            dispatch({
                type: OBTENER_IMAGENES_SLIDER,
                payload: res.data.slider
            })
        } catch (error) {
            
        }
    }


    return (
        <AdministracionContext.Provider
            value={{
                msg: state.msg,
                slider: state.slider,
                getSliderImages
            }}
        >
            {props.children}
        </AdministracionContext.Provider>
    )
}

export default AdministracionState;