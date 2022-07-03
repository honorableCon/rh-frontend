import React from 'react';
import Container from '../UIElements/Container';
import ApexChart from './ApexChart.tsx';
import { Chart } from "react-google-charts";


// export default function ChartPermanentEffectifs({effectifs}) {
//   const {effectifsNow, effectifsBefore} = effectifs;
//   const options = {
//     chart: {
//       title: "Effectif permanents",
//       subtitle: `CDD, CDI, et Stage: ${effectifsNow.year} et ${effectifsBefore.year}`,
//     },
//     colors : ["#7c4b08", "#ee820f"],
//   };
//   const data = [
//     ["", `${effectifsNow.year}`, `${effectifsBefore.year}`],
//     ["CDD", effectifsNow.cdd, effectifsBefore.cdd],
//     ["CDI", effectifsNow.cdi, effectifsBefore.cdi],
//     ["Stage", effectifsNow.stage, effectifsBefore.stage],
//   ];

//   return (
//     <div className="p-6 flex flex-col justify-center min-w-0 break-words bg-white mb-6 shadow-lg rounded-xl">
//         <Chart
//             chartType="Bar"
//             width="95%"
//             height="400px"
//             data={data}
//             options={options}
//         />
//     </div>
//     );
  
// }


export const options = {
  chart: {
    title: "Effectif intérimaire",
    subtitle: "Effectifs des intérimaires: 2022-2021",
    legend: { position: 'none' },
  },
  colors : ["#7c4b08", "#ee820f"],
};

export default function ChartPermanentEffectifs({effectifs}) {
  const {effectifsNow, effectifsBefore} = effectifs;

  const [state, setState] = React.useState({
    series: [{
      name: `${effectifsNow.year}`,
      data: [effectifsNow.cdd, effectifsNow.cdi, effectifsNow.stage]
    }, {
      name: `${effectifsBefore.year}`,
      data: [effectifsBefore.cdd, effectifsBefore.cdi, effectifsBefore.stage]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 650
      },
      colors:['#7c4b08', '#ee820f'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['CDD', 'CDI', 'STAGE'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
  });

  return (
    <Container>
      <ApexChart options={state.options} series={state.series} type="bar" height={450} />
    </Container>
  );
  
}
