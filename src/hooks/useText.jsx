export const useText = () => {
    

    function reemplazarEspaciosConGuiones(texto) {
        return texto.replace(/\s/g, "-");
      }

    return {
        reemplazarEspaciosConGuiones
    }
}