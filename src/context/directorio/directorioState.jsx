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
    { nombre: "Solo leveling", categoria: "manhwa", calif: "9.13", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.webp" },
    { nombre: "Maldita reencarnación", categoria: "manhwa", calif: "9.75", url: "https://otakuteca.com/images/books/cover/62b33f5a5c0f5.webp" },
    { nombre: "Registros de supervivenc...", categoria: "manhwa", calif: "8.78", url: "https://otakuteca.com/images/books/cover/61fbb5bf02e45.webp" },
    { nombre: "El dios de la escuela se...", categoria: "manhwa", calif: "8.78", url: "https://otakuteca.com/images/books/cover/5d3df9c5378b5.webp" },
    { nombre: "La vida despues de la muerte", categoria: "manhwa", calif: "8.89", url: "https://otakuteca.com/images/books/cover/5ddde8a92558c.webp" },
    { nombre: "Guerrero de nivelacion ha...", categoria: "manhwa", calif: "10.00", url: "https://otakuteca.com/images/books/cover/645feeabbf6ae.webp" },
    { nombre: "La era del gran diluvio", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/642cb67221a43.webp" },
    { nombre: "Song of the skywalkers", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/5d5fd8924ecb7.webp" },
    { nombre: "Super human era", categoria: "manhua", calif: "10.00", url: "https://otakuteca.com/images/books/cover/5fe9c73717852.webp" },
    { nombre: "Mis discipulas son todas in...", categoria: "manhua", calif: "7.71", url: "https://otakuteca.com/images/books/cover/5fbb1b741ba61.webp" },
    { nombre: "Comienzo de la era humana", categoria: "manhua", calif: "0.00", url: "https://otakuteca.com/images/books/cover/5f4ad3371b22a.webp" },
    { nombre: "¿Mi esposa es en realidad ...", categoria: "manhua", calif: "7.50", url: "https://otakuteca.com/images/books/cover/602a535b9f308.webp" },
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
    { nombre: "Solo leveling", categoria: "manhwa", calif: "9.13", url: "https://otakuteca.com/images/books/cover/5c2efcd42cd5e.webp" },
    { nombre: "Maldita reencarnación", categoria: "manhwa", calif: "9.75", url: "https://otakuteca.com/images/books/cover/62b33f5a5c0f5.webp" },
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