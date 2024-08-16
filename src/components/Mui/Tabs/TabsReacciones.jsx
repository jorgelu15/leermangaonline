import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';
import { useReaccion } from '../../../hooks/useReaccion';
import { useAuth } from '../../../hooks/useAuth';

const TabsReacciones = ({ id, ...props }) => {
  const { usuario } = useAuth();
  const { setReaccion, reaccionesSerieUsuario } = useReaccion();
  const [selectedIndices, setSelectedIndices] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const reacciones = ['Leido', 'Pendiente', 'Siguiendo', 'Favorito', 'Abandonado'];

  useEffect(() => {
    // Inicializa los índices seleccionados a partir de las reacciones del usuario
    if (reaccionesSerieUsuario) {
      const initialSelected = reaccionesSerieUsuario.map(reaccion => Number(reaccion.tipo) - 1);
      setSelectedIndices(initialSelected);
    }
  }, [reaccionesSerieUsuario]);

  const handleTabClick = (index) => {
    let newSelectedIndices;
    
    if (selectedIndices.includes(index)) {
      // Si ya está seleccionado, desmarcarlo
      newSelectedIndices = selectedIndices.filter(i => i !== index);
    } else {
      // Si no está seleccionado, agregarlo
      newSelectedIndices = [...selectedIndices, index];
    }

    setSelectedIndices(newSelectedIndices);

    setReaccion({
      id_usuario: usuario?.id,
      id_serie: id,
      tipo: index + 1
    }).then(data => {
      enqueueSnackbar(`Se ha marcado como ${reacciones[index]}`, {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        }
      });
    }).catch(e => {
      enqueueSnackbar(`No se pudo seleccionar la elección`, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        }
      });
    });
  };

  return (
    <div className='reaccion'>
      <div className='reaccion-inner'>
        <ul className='reaccion-list'>
          {reacciones.map((tab, index) => (
            <li
              key={index}
              className={`reaccion-list-item ${selectedIndices.includes(index) ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabsReacciones;
