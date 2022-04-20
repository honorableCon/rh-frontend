import React from 'react';
import { Chart } from "react-google-charts";


export default function ChartPermanentEffectifs({effectifs}) {
  const {effectifsNow, effectifsBefore} = effectifs;
  const options = {
    chart: {
      title: "Effectif permanents",
      subtitle: `CDD, CDI, et Stage: ${effectifsNow.year} et ${effectifsBefore.year}`,
    },
    colors : ["#7c4b08", "#ee820f"],
  };
  const data = [
    ["", `${effectifsNow.year}`, `${effectifsBefore.year}`],
    ["CDD", effectifsNow.cdd, effectifsBefore.cdd],
    ["CDI", effectifsNow.cdi, effectifsBefore.cdi],
    ["Stage", effectifsNow.stage, effectifsBefore.stage],
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
