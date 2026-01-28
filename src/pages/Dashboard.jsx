import HOC from "./HOC";
import img from "../images/dashboard_profile.jpg";
import {
  FaArrowDown,
  FaArrowUp,
  FaChartBar,
  FaChartPie,
  FaPercent,
  FaSearch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend);

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
      {/* Dashboard Desing */}
      {/* <!-- Stats Section --> */}
      {/* Top Part */}
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

            <img src={img} className="w-12  h-12 rounded-full" />
          </div>
        </div>
        <div className="pb-32 mt-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded relative  shadow-md p-4 ">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  Traffic
                </p>
                <p className="text-xl font-semibold text-gray-700">350,897</p>
                <p className="text-sm mt-5 text-gray-400">
                  <span className="text-green-500 mr-2">
                    <FaArrowUp className="inline" /> 3.48%
                  </span>
                  Since last month
                </p>
              </div>
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#ef4444] text-white">
                <FaChartBar className="inline-block" />
              </div>
            </div>

            <div className="bg-white rounded relative  shadow-md p-4 ">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  NEW USERS
                </p>
                <p className="text-xl font-semibold text-gray-700">2,356</p>
                <p className="text-sm mt-5 text-gray-400">
                  <span className="text-red-500 mr-2">
                    <FaArrowDown className="inline" /> 3.48%
                  </span>
                  Since last week
                </p>
              </div>
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#f97316] text-white">
                <FaChartPie className="inline-block text-lg" />
              </div>
            </div>

            <div className="bg-white rounded relative  shadow-md p-4 ">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  sales
                </p>
                <p className="text-xl font-semibold text-gray-700">924</p>
                <p className="text-sm mt-5 text-gray-400">
                  <span className="text-[#f97316] mr-2">
                    <FaArrowDown className="inline" /> 1.10%
                  </span>
                  Since yesterday
                </p>
              </div>
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#ec4899] text-white">
                <IoIosPeople className="inline-block text-2xl" />
              </div>
            </div>

            <div className="bg-white rounded relative  shadow-md p-4 ">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  PERFORMANCE
                </p>
                <p className="text-xl font-semibold text-gray-700">49,65%</p>
                <p className="text-sm mt-5 text-gray-400">
                  <span className="text-green-500 mr-2">
                    <FaArrowUp className="inline" /> 12%
                  </span>
                  Since last month
                </p>
              </div>
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#0ea5e9] text-white">
                <FaPercent className="inline-block" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom chart part */}
      {/* Left chart */}
        <div className="w-full xl:w-8/12 px-4 mb-12">
          <div className="relative flex flex-col min-w-0 wrap-break-word w-full shadow-lg rounded bg-slate-700">
            {/* Header */}
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <h6 className="uppercase text-slate-200 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
            </div>

            {/* Chart */}
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
