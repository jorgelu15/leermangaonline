import { useContext, useEffect } from "react";
import administracionContext from "../context/administracion/administracionContext";

export const useAdmin = () => {
    const {
        slider,
        getSliderImages,
        postSliderImage,
        deleteSliderImage
    } = useContext(administracionContext);

    return {
        slider,
        getSliderImages,
        postSliderImage,
        deleteSliderImage
    }
}