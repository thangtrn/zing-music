import React, { useEffect, useState } from 'react';

import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

ChartJS.register({
   id: 'uniqueid5',
   afterDraw: function (chart) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
         const activePoint = chart.tooltip._active[0];
         const ctx = chart.ctx;
         const x = activePoint.element.x;
         const topY = chart.scales.y.top;
         const bottomY = chart.scales.y.bottom;
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, bottomY);
         ctx.lineWidth = 1;
         ctx.strokeStyle = activePoint.element.options.borderColor;
         ctx.stroke();
         ctx.restore();
      }
   },
});

const options = {
   responsive: true,
   maintainAspectRatio: false,
   layout: {
      padding: {
         right: 20,
         top: 20,
      },
   },
   scales: {
      y: {
         ticks: { display: false, stepSize: 25 },
         grid: {
            color: 'rgba(255,255,255,0.1)',
            drawTicks: false,
         },
         border: { dash: [3, 4], width: 0 },
         min: 0,
         max: 100,
      },
      x: {
         ticks: { color: 'rgba(255,255,255, 0.6)' },
         grid: { color: 'transparent' },
         afterBuildTicks: (scale) => {
            const newTicks = scale.ticks.filter((item) => item.value % 2 === 0);
            scale.ticks = [...newTicks];
         },
      },
   },
   plugins: {
      legend: false,
      tooltip: {
         enabled: false,
      },
   },
   hover: {
      mode: 'dataset',
      intersect: false,
   },
};

const ChartLine = ({ chartData }) => {
   const [data, setData] = useState(null);

   const labelTime = () => chartData.times.map((item) => item.hour + ':00');

   const labelItem = (index = 0) =>
      chartData.items[Object.keys(chartData.items)[index]].map(
         (item) => (item.counter / chartData.maxScore) * 100,
      );

   useEffect(() => {
      const labels = labelTime();
      const datasets = [];
      if (chartData?.items) {
         for (let i = 0; i < 3; i++) {
            datasets.push({
               data: labelItem(i),
               borderColor:
                  i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
               tension: 0.3,
               borderWidth: 1.5,
               pointHoverRadius: 5,
               pointHoverBorderWidth: 3,
               pointBackgroundColor: 'transparent',
               pointHoverBackgroundColor: 'white',
               pointBorderColor: 'transparent',
               pointHoverBorderColor:
                  i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
            });
         }
         setData({ labels, datasets });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [chartData]);

   return (
      <>
         {/* <div className="w-full h-full"> */}
         {data && <Line data={data} options={options} />}
         {/* </div> */}
      </>
   );
};

export default ChartLine;
