import React from 'react';
import { Chart } from 'react-google-charts';

export default function ChartStagiaireEffectifs({ effectifs }) {
  const { permanents, permanentsBefore } = effectifs;
  const data = [
    ['', 'Durée en mois', 'Nombre de stagiaires'],
    ['Sécretariat', 2, 8],
    ['QHSE', 1, 2],
    ['Centre de Formation', 3, 1],
    ['Maintenance', 20, 19],
    ['Laboratoire', 12, 3],
    ['Ressources Humaines', 12, 30],
    ['Comptabilité', 15, 36],
  ];

  const options = {
    title: 'Répartition des stagiaires',
    chartArea: { width: '60%' },
    colors: ['#7c4b08', '#ee820f'],
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
  };

  return (
    <div className="p-6 flex flex-col justify-center min-w-0 break-words bg-white mb-6 shadow-lg rounded-xl">
      <Chart
        chartType="BarChart"
        width="100%"
        height="600px"
        data={data}
        options={options}
      />
    </div>
  );
}
