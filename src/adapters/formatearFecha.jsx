function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);

  // Opciones para el formato
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC' // Puedes ajustar la zona horaria según sea necesario
  };

  return fecha.toLocaleDateString('es-ES', opciones);
}


export default formatearFecha;