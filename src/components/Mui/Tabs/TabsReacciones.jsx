import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';
import { useReaccion } from '../../../hooks/useReaccion';
import { useAuth } from '../../../hooks/useAuth';

const TabsReacciones = ({ id, ...props }) => {
  const { usuario } = useAuth();
  const { setReaccion, reaccionesSerieUsuario } = useReaccion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const { enqueueSnackbar } = useSnackbar()
  const reacciones = ['Leido', 'Pendiente', 'Siguiendo', 'Favorito', 'Abandonado'];

  useEffect(() => {
    const listItem = document.querySelectorAll('.reaccion-list-item')[activeIndex];
    if (listItem) {
      setIndicatorStyle({
        left: listItem.offsetLeft,
        width: listItem.offsetWidth
      });
    }
  }, [activeIndex]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setReaccion({
      id_usuario: usuario?.id,
      id_serie: id,
      tipo: index + 1
    }).then(data => {
      enqueueSnackbar(`Se ha marcado como ${reacciones[activeIndex]}`, {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        }
      });
    }).catch(e => {
      enqueueSnackbar(`No se pudo seleccionar la eleccion`, {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        }
      });
    })
    
  };
  return (
    <div className='reaccion'>
      <div className='reaccion-inner'>
        <ul className='reaccion-list'>
          {reacciones.map((tab, index) => {
            console.log(reaccionesSerieUsuario?.find(item => Number(item.tipo) === (index + 1)) ? 'active' : '')
            return (
              <li
              key={index}
              className={`reaccion-list-item ${reaccionesSerieUsuario?.find(item => Number(item.tipo) === (index + 1)) ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
            )
          }
          )}
        </ul>
        <span className='active-item-reaccion' style={indicatorStyle}></span>
      </div>
    </div>
  );
};

export default TabsReacciones;
