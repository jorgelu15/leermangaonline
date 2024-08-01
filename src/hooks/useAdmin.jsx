import { useContext, useEffect } from "react";
import administracionContext from "../context/administracion/administracionContext";

export const useAdmin = () => {
    const {
        slider,
        getSliderImages
    } = useContext(administracionContext);

    return {
        slider,
        getSliderImages
    }
}