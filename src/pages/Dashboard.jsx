import HOC from "./HOC";
import img from "../images/dashboard_profile.jpg";
import { FaSearch } from "react-icons/fa";
// import { IoIosPeople } from "react-icons/io";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

/* ✅ REGISTER CHART.JS ONCE */
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "2026",
        data: [65, 78, 66, 44, 56, 67, 75],
        borderColor: "#4f5bd5",
        backgroundColor: "rgba(79,91,213,0.1)",
        pointBackgroundColor: "#4f5bd5",
        pointBorderColor: "#4f5bd5",
        pointRadius: 4,
        borderWidth: 3,
        tension: 0.4,
        fill: false,
      },
      {
        label: "2025",
        data: [40, 68, 86, 74, 55, 60, 88],
        borderColor: "#ffffff",
        backgroundColor: "rgba(255,255,255,0.1)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#ffffff",
        pointRadius: 4,
        borderWidth: 3,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#ffffff",
          boxWidth: 30,
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        intersect: false,
        mode: "index",
      },
    },
    scales: {
      y: {
        min: 40,
        max: 90,
        ticks: {
          color: "#cbd5e1",
          stepSize: 5,
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
          borderDash: [5, 5],
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: "#cbd5e1",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      {/* Dashboard Top */}
      <div className="bg-[#0284c7] px-14 w-274">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-white font-semibold text-sm uppercase">
            Dashboard
          </h1>

          <div className="flex gap-3 align-middle">
            <div className="relative bg-white rounded mt-0.5 h-11">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search here..."
                className="ps-9 py-2 w-53 mt-1 rounded-md text-sm outline-none"
              />
            </div>

            <img src={img} className="w-12 h-12 rounded-full" />
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full xl:w-8/12 px-4 mb-12">
        <div className="relative flex flex-col min-w-0 w-full shadow-lg rounded bg-slate-700">
          <div className="rounded-t px-4 py-3">
            <h6 className="uppercase text-slate-200 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-white text-xl font-semibold">
              Sales value
            </h2>
          </div>

          <div className="p-4 flex-auto">
            <div className="relative h-87.5">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Dashboard);
