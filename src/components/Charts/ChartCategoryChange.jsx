import React from 'react';
import { Chart } from 'react-google-charts';

export default function ChartCategoryChange() {
  const options = {
    chart: {
      title: 'Changement de catégorie',
      subtitle: `CDD, CDI, et Stage: 2021 et 2022`,
    },
    colors: ['#7c4b08', '#ee820f'],
  };
  const data = [
    ['', `Homme`, `femme`, `Homme`, `femme`],
    ['Ouvriers', 12, 0, 21, 0],
    ['Employés', 12, 0, 21, 0],
    ['Agents de maitrise', 12, 0, 21, 0],
    ['Cadres', 12, 0, 21, 0],
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
