import React from "react";

import { Bar, Doughnut } from "react-chartjs-2";

import { ArcElement } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card } from "@material-tailwind/react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement);

export const option = {
  responsive: true,
  plugins: {
    // legend: { position: "chartArea" },
    legend: {
      // position: "top",
    },
    title: {
      // display: true,
      // text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawOnChartArea: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

export const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Product A",
      data: [20, 30, 40, 55, 60, 34, 66, 28, 23, 32, 12, 9],
      backgroundColor: [
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",

        "rgb(109 ,40 ,217)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
        "rgb(221 ,214 ,254)",
      ],
      borderRadius: 12,
      borderSkipped: false,
    },
  ],
};

const data1 = {
  // labels: [
  //   'Red',
  //   'Blue',
  //   'Yellow'
  // ],
  datasets: [
    {
      label: "My First Dataset",
      data: [45, 20, 25],
      backgroundColor: [
        "rgb(109 ,40 ,217)",
        "rgb(192 38 211)",
        "rgb(214 211 209)",
      ],
      radius: 100,
      hoverOffset: 4,
      outerEnd: 10,
      cutout: "60%",
    },
  ],
};

export const option1 = {
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const Chart = () => {
  return (
    <div className="flex gap-8  mt-10 ml-64 ">
      <div className=" w-2/3 shadow-2xl dark:bg-neutral-700">
        <h2 className="text-xl font-semibold ml-5">Overview </h2>
        <p className=" text-base text-neutral-600 dark:text-neutral-200 ml-5">
          Total sales
        </p>
        <Bar data={data} options={option} className="w-64" />
      </div>

      <div className=" w-1/3 justify-center  shadow-2xl dark:bg-neutral-700">
        <h2 className="text-xl font-semibold ml-5">Customers</h2>
        <p className=" text-base text-neutral-600 dark:text-neutral-200 ml-5">
          Customers that buy products
        </p>
        <Doughnut data={data1} width={100} height={100} options={option1} />
      </div>
    </div>
  );
};

export default Chart;
