import React from 'react';
import { Chart } from 'react-google-charts';
import Container from '../UIElements/Container';
import ApexChart from './ApexChart.tsx';

export const options = {
  chart: {
    title: 'Effectif intérimaire',
    subtitle: 'Effectifs des intérimaires: 2022-2021',
    legend: { position: 'none' },
  },
  colors: ['#7c4b08', '#ee820f'],
};

export default function ChartInterimaireEffectifs() {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 23, 44],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 36, 26],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#7c4b08', '#ee820f'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Sep',
          'Dec',
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },
  });

  return (
    <Container>
      <ApexChart
        options={state.options}
        series={state.series}
        type="bar"
        heighzt={350}
      />
    </Container>
  );
}
