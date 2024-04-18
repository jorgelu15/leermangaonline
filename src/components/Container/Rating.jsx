import React, { useRef, useState } from 'react';
import { useSeries } from "../../hooks/useSeries";
import useAuth from '../../hooks/useAuth';

const Rating = (props) => {
    
    const {
        votos,
        rate
    } = props;

    const { usuario } = useAuth();
    const { serie, subirVotoSerie } = useSeries();
    const [rating, setRating] = useState(rate);
  
    const handleClick = async (value) => {
        const datos = {
            id_usuario: usuario?.id,
            serie_uid: serie?.serie_uid,
            voto: value
        }
        subirVotoSerie(datos)
    };

    const handleMouseEnter = (i) => {
        setRating(i+1)
    };

    const handleMouseOut = (i) => {
        setRating(rate)
    };
  
    return (
        <div className="rating">
            <div className="number">
                <h3>{rate}</h3>
            </div>
            <div className='stars'>
                <div>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
        
                    return (
                        <span 
                        className='star'
                        key={i}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseOut={() => handleMouseOut(i)}
                        onClick={() => handleClick(ratingValue)}
                        style={{ cursor: 'pointer' }}
                        >
                        {ratingValue <= rating ? '★' : '☆'}
                        </span>
                    );
                })}
                </div>
                <div>
                    <p><span>{votos}</span> VOTOS</p>
                </div>
            </div>
        </div>
    );
  };
  
  export default Rating;