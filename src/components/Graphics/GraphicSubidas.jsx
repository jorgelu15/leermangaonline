import { useContext, useEffect, useState } from "react";
import React, { useRef } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { useGrupos } from "../../hooks/useGrupos";
import { useParams } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


const GraphicSubidas = (props) => {
  
  const { id } = useParams();
  
  const { seguidores_por_fecha, getSeguidoresAnoActual } = useGrupos();
  
  useEffect(() => {
    if(id){
      getSeguidoresAnoActual(id);
    }
  }, [id])

  const data = {
    labels,
    datasets: [
      {
        label: 'Series',
        data: seguidores_por_fecha?.datasets[0].data,
        borderColor: 'rgb(43, 125, 254)',
        backgroundColor: 'rgba(43, 125, 254, 0.5)',
      },
    ],
  };

  return (
    <div className="graf-seg">
      <div>
        <h3>Ultimos seguidores</h3>
        <p>Grafica de los nuevos seguidores en cada mes</p>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default GraphicSubidas;