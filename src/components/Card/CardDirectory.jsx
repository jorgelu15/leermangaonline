import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import routes from "../../helpers/routes";
import { useText } from '../../hooks/useText';

export default function CardDirectory(props) {

  const {
    cards
  } = props;

  const { reemplazarEspaciosConGuiones } = useText();

  let navigate = useNavigate();


  const handleClick = async () => {
    await getGrupo(scan)
    navigate(routes.scanlation)
  }

  return (
    <div className="sec-cards">
      {
        cards && cards?.map((card, idx) => {
          return (
            <div className="cont-card" key={idx}>
              <Link to={routes.manga + `/${card.serie_uid}/${reemplazarEspaciosConGuiones(card.nombre.toLowerCase())}`}>
                <div className="card" style={{ backgroundImage: `url('http://upload.leermangaonline.com/uploads/obras/${card.portada}')` }}>
                  <div>
                    <p className="categoria">{card.tipo}</p>
                    {card.votos && card.votos[0] && <p className="calificacion">{card?.votos[0].prom_vot}</p>}
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