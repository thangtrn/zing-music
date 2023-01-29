import React, { useEffect, useRef, useState, useMemo } from 'react';

import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';
import Tooltip from './Tooltip';

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

// default option Chartjs
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

const LineChart = ({ chartData, rankItems }) => {
   const [data, setData] = useState(null);
   const chartRef = useRef(null); //create reference hook
   const [tooltipState, setTooltipState] = useState({
      opacity: 0,
      top: 0,
      left: 0,
      arrowLeft: 0,
      data: {},
   }); //initial tooltip state

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
               // Du lieu mang theo
               mediaValue: {
                  title: rankItems[i].title,
                  artistsNames: rankItems[i].artistsNames,
                  thumbnail: rankItems[i].thumbnail,
                  percent: Math.round(
                     (+rankItems[i].score * 100) / +chartData.totalScore,
                  ),
                  backgroundColor:
                     i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
               },
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

   // custom option tooltip chartjs
   const optionsChart = useMemo(
      () => ({
         ...options,
         plugins: {
            legend: false,
            tooltip: {
               enabled: false,
               external: (context) => {
                  const tooltipModel = context.tooltip;
                  if (!chartRef || !chartRef.current) return;

                  if (tooltipModel.opacity === 0) {
                     if (tooltipState.opacity !== 0)
                        setTooltipState((prev) => ({
                           ...prev,
                           opacity: 0,
                           top: 0,
                           left: 0,
                           arrowLeft: 0,
                        }));
                     return;
                  }

                  // tính toán vị trí tooltip và arrow của tooltip
                  const canvasPosition =
                     context.chart.canvas.getBoundingClientRect();
                  let leftPos = tooltipModel.caretX - 180 / 2;

                  if (leftPos <= 0) leftPos = 0;
                  else if (
                     canvasPosition.width - tooltipModel.caretX + 20 <=
                     180 / 2
                  )
                     leftPos = canvasPosition.width - 180;
                  const newTooltipData = {
                     opacity: 1,
                     left: leftPos,
                     arrowLeft: tooltipModel.caretX - leftPos,
                     top: tooltipModel.caretY,
                     data: { ...tooltipModel.dataPoints[0].dataset.mediaValue },
                  };
                  if (!_.isEqual(tooltipState, newTooltipData))
                     setTooltipState(newTooltipData);
               },
            },
         },
      }),
      [tooltipState],
   );

   return (
      <div className="w-full h-full relative">
         {data && <Line ref={chartRef} data={data} options={optionsChart} />}
         <Tooltip tooltipData={tooltipState} />
      </div>
   );
};

export default LineChart;
