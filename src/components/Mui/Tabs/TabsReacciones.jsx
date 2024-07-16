import React, { useState, useEffect } from 'react';

const TabsReacciones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});

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
  };

  return (
    <div className='reaccion'>
      <div className='reaccion-inner'>
        <ul className='reaccion-list'>
          {['Leido', 'Pendiente', 'Siguiendo', 'Favorito', 'Abandonado'].map((tab, index) => (
            <li
              key={index}
              className={`reaccion-list-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <span className='active-item-reaccion' style={indicatorStyle}></span>
      </div>
    </div>
  );
};

export default TabsReacciones;
