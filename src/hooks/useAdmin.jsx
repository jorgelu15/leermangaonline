import { useContext, useEffect } from "react";
import administracionContext from "../context/administracion/administracionContext";

export const useAdmin = () => {
    const {
        noticias,
        slider,
        getSliderImages,
        postSliderImage,
        deleteSliderImage,
        getAllNoticias,
        postNoticia,
        updateNoticia,
        deleteNoticia
    } = useContext(administracionContext);

    return {
        noticias,
        slider,
        getSliderImages,
        postSliderImage,
        deleteSliderImage,
        getAllNoticias,
        postNoticia,
        updateNoticia,
        deleteNoticia
    }
}