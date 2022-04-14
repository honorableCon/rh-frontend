import React from 'react';
import { Chart } from "react-google-charts";


export default function ChartPermanentEffectifs({effectifs}) {
  const {permanents, permanentsBefore} = effectifs;
  const options = {
    chart: {
      title: "Effectif permanents",
      subtitle: `CDD, CDI, et Stage: ${permanents.year} et ${permanentsBefore.year}`,
    },
  };
  const data = [
    ["", `${permanents.year}`, `${permanentsBefore.year}`],
    ["CDD", permanents.CDD, permanentsBefore.CDD],
    ["CDI", permanents.CDI, permanentsBefore.CDI],
    ["Stage", permanents.Stage, permanentsBefore.Stage],
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
