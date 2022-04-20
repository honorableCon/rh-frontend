import React from 'react';
import { Chart } from "react-google-charts";


export default function ChartStagiaireEffectifs({effectifs}) {
  const {permanents, permanentsBefore} = effectifs;
  const data = [
    ["City", "Durée en mois", "Nombre de stagiaires"],
    ["New York City, NY", 12, 8],
    ["Los Angeles, CA", 37, 36],
    ["Chicago, IL", 26, 28],
    ["Houston, TX", 20, 19],
    ["Philadelphia, PA", 15, 15],
  ];
  
  const options = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "60%" },
    colors : ["#7c4b08", "#ee820f"],
    hAxis: {
      title: "Total Population",
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
