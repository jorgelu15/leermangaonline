    import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import clienteAxiosUpload from '../../config/axiosUpload';

import SerieContext from './serieContext';
import SerieReducer from './serieReducer';

import {
    OBTENER_CAPITULOS,
    OBTENER_GENEROS_SERIE,
    OBTENER_SERIE,
    OBTENER_SERIES,
    OBTENER_STATS,
    OBTENER_TIPO_SOLICITUDES,
    OBTENER_VOTOS,
    SUBIR_SERIE,
    SUBIR_VOTO_SERIE,
    OBTENER_VISUALIZACIONES_SERIE,
    INSERTAR_VISUALIZACIONE_SERIE,
    OBTENER_SERIES_TRENDING_SEMANAL,
    OBTENER_SERIES_TRENDING_MENSUAL,
    EDITAR_CAPITULO,
    OBTENER_SERIES_POPULARES,
    VALIDAR_SERIE,
    OBTENER_SERIES_VERIFIED,
    MENSAJE_ERROR
} from '../../types';

const SerieState = props => {

    const initialState = {
        msg: null,
        series: null,
        series_verified: null,
        serie: null,
        capitulos: null,
        generosSerie: null,
        votos: null,
        seriesFiltradas: null,
        seriesVerifiedFiltradas: null,
        stats: null,
        solicitud: null,
        visualizaciones: null,
        seriesTrendingSemanal: null,
        seriesTrendingMensual: null,
        seriesPopulares: null
    }

    const [state, dispatch] = useReducer(SerieReducer, initialState);

    const subirSerie = async (file) => {
        try {
            const respuesta = await clienteAxios.post(`/serie`, file);
            const respuesta2 = await clienteAxiosUpload.post(`/uploadSerie`, file);
            dispatch({
                type: SUBIR_SERIE,
                payload: respuesta.data.msg
            })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getSeries = async () => {
        try {
            const res = await clienteAxios.get(`/serie`)

            dispatch({
                type: OBTENER_SERIES,
                payload: res.data.series
            })
        } catch (error) {
            
        }
    }
    const getSeriesVerified = async () => {
        try {
            const res = await clienteAxios.get(`/serie/verified`)

            dispatch({
                type: OBTENER_SERIES_VERIFIED,
                payload: res.data.series
            })
        } catch (error) {
            
        }
    }

    const getGeneroSerie = async (serie_uid) => {
        try {
            const res = await clienteAxios.get(`/generoserie/${serie_uid}`);

            dispatch({
                type: OBTENER_GENEROS_SERIE,
                payload: res.data.serie[0]?.genero_series
            })
        } catch (error) {

        }
    }

    const subirVotoSerie = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/votos', datos);
            
            dispatch({
                type: SUBIR_VOTO_SERIE,
                payload: respuesta.data
            })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getPromVotoSerie = async (serie_uid) => {
        try {
            const res = await clienteAxios.get(`/votos/${serie_uid}`)

            dispatch({
                type: OBTENER_VOTOS,
                payload: res.data.serie
            })
        } catch (error) {
            
        }
    }

    const getSerie = async  (serie_uid) => {
        try {
            const res = await clienteAxios.get(`/serie/${serie_uid}`);

            dispatch({
                type:  OBTENER_SERIE,
                payload: res.data.serie
            })
        } catch (error) {
            
        }
    }

    const getCapitulosSerie = async (serie_uid) => {
        try {
            const res = await clienteAxios.get(`/capitulo/capitulos/${serie_uid}`);
            dispatch({
                type:  OBTENER_CAPITULOS,
                payload: res.data.capitulos
            })
        } catch (error) {
            
        }
    }

    const getStatsSerie = async (grupoId)=>{
        try {
            const res = await clienteAxios.get(`/serie/stats/${grupoId}`);
            dispatch({
            type: OBTENER_STATS,
            payload: res.data.stats
            })
        } catch (error) {
            
        }
    }

    const getTypeSolicitudes = async (grupoId) => {
        try {
            const res = await clienteAxios.get(`/grupo/solicitudes/tipo/${grupoId}`);
            dispatch({
                type: OBTENER_TIPO_SOLICITUDES,
                payload: res.data.solicitud
            })
        } catch (error) {
            
        }
    }

    const getVisualizacion = async (serie_uid) => {
        try {
            const res = await clienteAxios.get(`/visualizacion/${serie_uid}`);
            dispatch({
                type: OBTENER_VISUALIZACIONES_SERIE,
                payload: res.data.visualizaciones
            })
        } catch (error) {

        }
    }

    const postVisualizacion = async (id_serie) => {
        try {
            const respuesta = await clienteAxios.post('/visualizacion', {id_serie: id_serie});
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const getAllCapitulos = async () => {
        try {
            const res = await clienteAxios.get(`/capitulo`);
            dispatch({
                type: OBTENER_CAPITULOS,
                payload: res.data.capitulos
            })
        } catch (error) {
            
        }
    }

    const getSeriesTrending = async (categoria) => {
        try{
            const res = await clienteAxios.get(`/serie/trending/${categoria}`);
            
            if(categoria === "semanal"){
                dispatch({
                    type: OBTENER_SERIES_TRENDING_SEMANAL,
                    payload: res.data.series
                })
            }else if(categoria === "mensual") {
                dispatch({
                    type: OBTENER_SERIES_TRENDING_MENSUAL,
                    payload: res.data.series
                })
            }
        }catch (error){

        }
    }

    const editarCapitulo = async (data) => {
        try {
            const res = await clienteAxios.put(`/capitulo/${data.id_capitulo}`, data);
            
            dispatch({
                type: EDITAR_CAPITULO,
                payload: data
            })

            return res.status;
        } catch (error) {
            const errorMessage = error.response?.data?.msg || 'Error desconocido';
            throw new Error(errorMessage); // Lanzar el error para que pueda ser manejado en la llamada de la función
        }
    }

    const getSeriesPopulares = async () => {
        try {
            const res = await clienteAxios.get(`/serie/populares`)

            dispatch({
                type: OBTENER_SERIES_POPULARES,
                payload: res.data.series
            })
        } catch (error) {
            
        }
    }

    const validarSerie = async (id_serie, verificacion) => {
        try {
            const res = await clienteAxios.put(`/serie/validar/${id_serie}`, {verificacion: verificacion})
            dispatch({
                type: VALIDAR_SERIE,
                payload: {id_serie, verificacion}
            })

            return res.status;
        } catch (error) {
            const errorMessage = error.response?.data?.msg || 'Error desconocido';
            throw new Error(errorMessage); // Lanzar el error para que pueda ser manejado en la llamada de la función
        }
    }


    return (
        <SerieContext.Provider
            value={{
                stats: state.stats,
                msg: state.msg,
                series: state.series,
                series_verified: state.series_verified,
                seriesFiltradas: state.seriesFiltradas,
                serie: state.serie,
                capitulos: state.capitulos,
                generosSerie: state.generosSerie,
                votos: state.votos,
                solicitud: state.solicitud,
                visualizaciones: state.visualizaciones,
                seriesTrendingSemanal: state.seriesTrendingSemanal,
                seriesTrendingMensual: state.seriesTrendingMensual,
                seriesPopulares: state.seriesPopulares,
                getSeries,
                getSeriesVerified,
                getSerie,
                subirSerie,
                subirVotoSerie,
                getGeneroSerie,
                getPromVotoSerie,
                getCapitulosSerie,
                getStatsSerie,
                getTypeSolicitudes,
                getVisualizacion,
                postVisualizacion,
                getAllCapitulos,
                getSeriesTrending,
                editarCapitulo,
                getSeriesPopulares,
                validarSerie
            }}
        >
            {props.children}
        </SerieContext.Provider>
    )
}

export default SerieState;