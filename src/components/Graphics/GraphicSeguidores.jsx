import { useContext, useState } from "react";
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
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Seguidores',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(43, 125, 254)',
        backgroundColor: 'rgba(43, 125, 254, 0.5)',
      },
    //   {
    //     label: 'Dataset 2',
    //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //     borderColor: 'rgb(53, 162, 235)',
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
    ],
  };

const GraphicSeguidores = (props) => {

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

export default GraphicSeguidores;