import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const DoughnutChart1 = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");

      new Chart(myChartRef, {
        type: "doughnut",
        data: data,
        options: {
          cutoutPercentage: 25, // Adjust this value as desired
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart1;
