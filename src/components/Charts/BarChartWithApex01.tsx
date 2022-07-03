import ApexChart from "./ApexChart.tsx";
import {useState} from 'react';

const Bar01 = () => {

    const [state, setState] = useState({
    
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        colors:['#7c4b08', '#ee820f'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
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
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    <div id="chart">
      <ApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
 );

}

export default Bar01;