import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import DirectorioContext from './directorioContext';
import DirectorioReducer from './directorioReducer';

import {
    OBTENER_SERIES,
    FILTRAR
} from '../../types';

const cards = [
    { nombre: "jujutsu Kaisen", categoria: "Manga", calif: "8.53", url: "https://otakuteca.com/images/books/cover/5ea1f703b755f.webp" },
    { nombre: "oshi no ko", categoria: "Manga", calif: "9.05", url: "https://otakuteca.com/images/books/cover/5efe4afd1d0c5.webp" },
    { nombre: "Kanojo, Okarishimasu", categoria: "Manga", calif: "3.91", url: "https://otakuteca.com/images/books/cover/606cda6f538c7.webp" },
    { nombre: "Class de 2 Banme ni...", categoria: "Manga", calif: "8.40", url: "https://otakuteca.com/images/books/cover/62e1dbb29f444.webp" },
    { nombre: "Kanan-sama Might be...", categoria: "Manga", calif: "8.92", url: "https://otakuteca.com/images/books/cover/629634d78ab1c.webp" },
    { nombre: "Senshitibu boi", categoria: "Manga", calif: "7.38", url: "https://otakuteca.com/images/books/cover/646dff10a1fa2.webp" },
    { nombre: "El mundo paralelo con...", categoria: "Manga", calif: "7.50", url: "https://otakuteca.com/images/books/cover/65010240f0a56.webp" },
    { nombre: "KINGDOW", categoria: "Manga", calif: "9.59", url: "https://otakuteca.com/images/books/cover/5bc121ab8e186.webp" },
    { nombre: "Isekai Ship Summoning", categoria: "Manga", calif: "9.00", url: "https://otakuteca.com/images/books/cover/61708df723eda.webp" },
    { nombre: "Yuusha Shoukan ni Ma", categoria: "Manga", calif: "8.54", url: "https://otakuteca.com/images/books/cover/5dbfb96f1ef61.webp" },
    { nombre: "Isekai Shoukan wa", categoria: "Manga", calif: "6.17", url: "https://otakuteca.com/images/books/cover/63813864eafb7.webp" },
    { nombre: "Kagurabachi", categoria: "Manga", calif: "6.71", url: "https://otakuteca.com/images/books/cover/65076987c0141.webp" },

]

const DirectorioState = props => {

    const initialState = {
        // series: null,
        series: cards,
        // filtrados: null,
        filtrados: cards,
        msg: null
    }

    const [state, dispatch] = useReducer(DirectorioReducer, initialState);

    const getSeries = async () => {
        try {
            const respuesta = await clienteAxios.get(`/serie`);
            dispatch({
                type: OBTENER_SERIES,
                payload: respuesta.data.series
            })
        } catch (error) {
  
            dispatch({
                type: MENSAJE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    const filtrar = (data) => {
        dispatch({
            type: FILTRAR,
            payload: data
        })
    }

    return (
        <DirectorioContext.Provider
            value={{
                series: state.series,
                filtrados: state.filtrados,
                msg: state.msg,
                getSeries,
                filtrar,
            }}
        >
            {props.children}
        </DirectorioContext.Provider>
    )
}

export default DirectorioState;