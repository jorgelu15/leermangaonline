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
import { useSeries } from "../../hooks/useSeries";
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


console.log(labels.map(() => faker.datatype.number({ min: 0, max: 1000 })))

const GraphicSeguidores = (props) => {
  const { id } = useParams();
  const { stats, getStatsSerie } = useSeries();

  useEffect(() => {
    if (id) {
      getStatsSerie(id)
    }
  }, [id])

  const data = {
    labels,
    datasets: [
      {
        label: 'Series',
        data: stats?.datasets[0].data,
        borderColor: 'rgb(43, 125, 254)',
        backgroundColor: 'rgba(43, 125, 254, 0.5)',
      },
    ],
  };


  return (
    <div className="graf-seg">
      <div>
        <h3>Últimas Subidas</h3>
        <p>Grafica de los subidas realizadas en cada mes</p>

      </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default GraphicSeguidores;