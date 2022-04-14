import React from 'react';
import { Chart } from "react-google-charts";


export const options = {
  chart: {
    title: "Effectif intérimaire",
    subtitle: "Effectifs des intérimaires: 2022-2021",
    legend: { position: 'none' },
  },
};

export default function ChartInterimaireEffectifs({effectifInterimaires}) {
  const data = [
    ["", "2022", "2021"],
    ["Janvier", 129, 92],
    ["Fevrier", 144, 122],
    ["Mars", 176, 135],
    ["Avril", 135, 148],
    ["Mai", 148, 216],
    ["Juin", 216, 194],
    ["Juillet", 194, 95],
    ["Aout", 95, 54],
    ["Septembre", 54, 38],
    ["Octobre", 38, 19],
    ["Novembre", 19, 12],
    ["Decembre", 12, 5]
  ];

  return (
    <div className="p-6 flex flex-col justify-center min-w-0 break-words bg-white mb-6 shadow-lg rounded-xl">
        <Chart
            chartType="Bar"
            width="95%"
            height="400px"
            data={data}
            options={options}
        />
    </div>
    );
  
}
