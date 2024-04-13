import React, { useRef, useState } from 'react';


const Rating = (props) => {
    
    const {
        votos
    } = props;

    const [rating, setRating] = useState(0);
  
    const handleClick = (value) => {
      setRating(value);
    };
  
    return (
        <div className="rating">
            <div className="number">
                <h3>4.2</h3>
            </div>
            <div className='stars'>
                <div>
                {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
        
                return (
                    <span 
                    className='star'
                    key={i}
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