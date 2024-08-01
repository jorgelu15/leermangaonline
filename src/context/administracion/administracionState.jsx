    import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import AdministracionContext from './administracionContext';
import AdministracionReducer from './administracionReducer';

import {
    OBTENER_IMAGENES_SLIDER,
    SUBIR_IMAGEN_SLIDER,
    BORRAR_IMAGEN_SLIDER
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

    const postSliderImage = async (file) => {
        try {
            const res = await clienteAxios.post(`/slider`, file)
            const respuesta2 = await clienteAxiosUpload.post(`/upload`, file);
            dispatch({
                type: SUBIR_IMAGEN_SLIDER,
                payload: res.data.slider
            })
        } catch (error) {
            
        }
    }

    const deleteSliderImage = async (id_slider) => {
        try {
            const res = await clienteAxios.delete(`/slider/${id_slider}`)
            dispatch({
                type: BORRAR_IMAGEN_SLIDER,
                payload: id_slider
            })
        } catch (error) {
            
        }
    }


    return (
        <AdministracionContext.Provider
            value={{
                msg: state.msg,
                slider: state.slider,
                getSliderImages,
                postSliderImage,
                deleteSliderImage
            }}
        >
            {props.children}
        </AdministracionContext.Provider>
    )
}

export default AdministracionState;