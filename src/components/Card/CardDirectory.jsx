import * as React from 'react';
import { useSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import routes from "../../helpers/routes";
import gruposContext from '../../context/grupos/gruposContext';

import userimg from '../../img/group-users.svg'

export default function CardDirectory(props) {

  const {
    cards
  } = props;

  let navigate = useNavigate();


  const handleClick = async () => {
    await getGrupo(scan)
    navigate(routes.scanlation)
  }

  function reemplazarEspaciosConGuiones(texto) {
    return texto.replace(/\s/g, "-");
  }

  return (
    <div className="sec-cards">
      {
        cards.map((card, idx) => {
          return (
            <div className="cont-card" key={idx}>
              <Link to={routes.manga + `/${card.serie_uid}/${reemplazarEspaciosConGuiones(card.nombre.toLowerCase())}`}>
                <div className="card" style={{ backgroundImage: `url('http://upload.leermangaonline.com/uploads/obras/${card.banner}')` }}>
                  <div>
                    <p className="categoria">{card.tipo}</p>
                    <p className="calificacion">{card.votos[0].prom_vot}</p>
                  </div>
                  <p className="nombre">{card.nombre}</p>
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  );
}