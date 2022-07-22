import React, { useEffect } from 'react';
import { getEffectifEmploye } from '../../toolbox/graphql';
import Container from '../UIElements/Container';
import ApexChart from './ApexChart.tsx';


export const options = {
  chart: {
    title: "Effectif intérimaire",
    subtitle: "Effectifs des intérimaires: 2022-2021",
    legend: { position: 'none' },
  },
  colors : ["#7c4b08", "#ee820f"],
};

export default function ChartPermanentEffectifs() {
  const [state, setState] = React.useState({
    series: [],
    options: {},
  });
  
  useEffect(() => {
    const year = "2022";
    getEffectifEmploye(year).then(res => {
      const {effectifsNow, effectifsBefore} = res.data

      const series = [{
        name: `${year}`,
        data: [effectifsNow.cdd, effectifsNow.cdi, effectifsNow.stage]
      }, {
        name: `${year - 1}`,
        data: [effectifsBefore.cdd, effectifsBefore.cdi, effectifsBefore.stage]
      }];

      const options ={
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
            text: 'Effectifs'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " personnes"
            }
          }
        }
      };

      setState({ series, options: {...options} });
      
    });
  }, []);

  return (
    <Container>
      { state.series && <ApexChart options={state.options} series={state.series} type="bar" height={450} /> }
    </Container>
  );
  
}


