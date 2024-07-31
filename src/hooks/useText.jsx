export const useText = () => {
    

    function reemplazarEspaciosConGuiones(texto) {
        return texto?.replace(/\s/g, "-");
      }

      const getRol = (param) => {
        const rol = {
            "0": "Administrador",
            "1": "Uploader",
            "2": "Lector",
        };

        return rol[param] || "Sin rol";
      }

    return {
        reemplazarEspaciosConGuiones,
        getRol
    }
}