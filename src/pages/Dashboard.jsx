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
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

/* ✅ REGISTER EVERYTHING YOU USE */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  // Line Chart Data
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
        pointRadius: 2,
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
        pointRadius: 2,
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
      {/* TOP SECTION */}
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

        <div className="pb-32 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* DETAILS CARDS */}
            {/* Traffic */}
            <div className="bg-white rounded relative shadow-md p-4">
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
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#ef4444] text-white">
                <FaChartBar />
              </div>
            </div>

            {/* New Users */}
            <div className="bg-white rounded relative shadow-md p-4">
              <p className="text-xs uppercase font-bold text-gray-400">
                New Users
              </p>
              <p className="text-xl font-semibold text-gray-700">2,356</p>
              <p className="text-sm mt-5 text-gray-400">
                <span className="text-red-500 mr-2">
                  <FaArrowDown className="inline" /> 3.48%
                </span>
                Since last week
              </p>
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#f97316] text-white">
                <FaChartPie />
              </div>
            </div>

            {/* Sales */}
            <div className="bg-white rounded relative shadow-md p-4">
              <p className="text-xs uppercase font-bold text-gray-400">Sales</p>
              <p className="text-xl font-semibold text-gray-700">924</p>
              <p className="text-sm mt-5 text-gray-400">
                <span className="text-[#f97316] mr-2">
                  <FaArrowDown className="inline" /> 1.10%
                </span>
                Since yesterday
              </p>
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#ec4899] text-white">
                <IoIosPeople className="text-2xl" />
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white rounded relative shadow-md p-4">
              <p className="text-xs uppercase font-bold text-gray-400">
                Performance
              </p>
              <p className="text-xl font-semibold text-gray-700">49.65%</p>
              <p className="text-sm mt-5 text-gray-400">
                <span className="text-green-500 mr-2">
                  <FaArrowUp className="inline" /> 12%
                </span>
                Since last month
              </p>
              <div className="w-12 h-12 absolute top-4 right-4 flex items-center justify-center rounded-full bg-[#0ea5e9] text-white">
                <FaPercent />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHART SECTION */}
      <div className="relative w-full">
        <div className="absolute w-full -top-24 px-10">
          {/* Chart Div */}
          <div className="w-full  flex flex-col xl:flex-row">
            {/* Left Chart - Sales Line Chart */}
            <div className=" xl:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 bg-slate-700 w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-3">
                  <h6 className="uppercase text-slate-200 text-xs font-semibold">
                    Overview
                  </h6>
                  <h2 className="text-white text-xl font-semibold mt-1">
                    Sales Value
                  </h2>
                </div>
                <div className="p-4 flex-auto">
                  <div className="relative h-87.5">
                    <Line data={data} options={options} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chart - Total Orders Bar Chart */}
            <div className="xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-3">
                  <h6 className="uppercase mb-1 text-xs font-semibold primeColor">
                    Performance
                  </h6>
                  <h2 className="text-gray-700 text-xl font-medium">
                    Total Orders
                  </h2>
                </div>
                <div className="p-4 flex-auto">
                  <div className="relative h-87.5">
                    <Bar
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                        ],
                        datasets: [
                          {
                            label: "2026",
                            data: [30, 78, 56, 34, 100, 45, 13],
                            backgroundColor: "#ed64a6",
                            barThickness: 7,
                          },
                          {
                            label: "2025",
                            data: [27, 68, 86, 74, 10, 4, 87],
                            backgroundColor: "#4c51bf",
                            barThickness: 7,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: "bottom",
                            labels: { boxWidth: 20, color: "#64748b" },
                          },
                          tooltip: {
                            backgroundColor: "#111827",
                            titleColor: "#fff",
                            bodyColor: "#fff",
                            cornerRadius: 6,
                            padding: 10,
                          },
                        },
                        scales: {
                          x: {
                            grid: { display: false },
                            ticks: { color: "#64748b" },
                          },
                          y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { stepSize: 10, color: "#64748b" },
                            grid: { borderDash: [4, 4], color: "#e5e7eb" },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BELOW CHART SECTION - TABLES */}
          <div className="w-full mt-2 mb-13 flex flex-col xl:flex-row">
            {/* Page Visits Table */}
            <div className="bg-white xl:w-12/12 mx-4 shadow-md rounded-lg ">
              <div className="flex justify-between items-center p-4">
                <h6 className="text-gray-700 font-semibold text-sm uppercase">
                  Page visits
                </h6>
                <button className="bg-indigo-500 text-white text-xs px-3 py-1 rounded">
                  SEE ALL
                </button>
              </div>
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-500 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Page Name</th>
                    <th className="px-4 py-3">Visitors</th>
                    <th className="px-4 py-3">Unique Users</th>
                    <th className="px-4 py-3">Bounce Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      page: "/argon/",
                      visitors: "4,569",
                      unique: "340",
                      bounce: "46,53%",
                      trend: "up",
                      color: "text-green-500",
                    },
                    {
                      page: "/argon/index.html",
                      visitors: "3,985",
                      unique: "319",
                      bounce: "46,53%",
                      trend: "down",
                      color: "text-orange-500",
                    },
                    {
                      page: "/argon/charts.html",
                      visitors: "3,513",
                      unique: "294",
                      bounce: "36,49%",
                      trend: "down",
                      color: "text-orange-500",
                    },
                    {
                      page: "/argon/tables.html",
                      visitors: "2,050",
                      unique: "147",
                      bounce: "50,87%",
                      trend: "up",
                      color: "text-green-500",
                    },
                    {
                      page: "/argon/profile.html",
                      visitors: "1,795",
                      unique: "190",
                      bounce: "46,53%",
                      trend: "down",
                      color: "text-red-500",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700 font-medium">
                        {row.page}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.visitors}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{row.unique}</td>
                      <td className="px-4 py-3 text-gray-700 flex items-center gap-1">
                        {row.trend === "up" ? (
                          // <FaArrowUp className="text-green-500 inline" />
                          <FaArrowUp className={`${row.color} inline`} />
                        ) : (
                          <FaArrowDown className={`${row.color} inline`} />
                        )}
                        {row.bounce}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Social Traffic Table */}
            <div className="bg-white xl:w-4/12 mx-4 shadow-lg rounded-lg overflow-auto ">
              <div className="flex justify-between items-center p-4">
                <h6 className="text-gray-700 font-semibold text-sm uppercase">
                  Social traffic
                </h6>
                <button className="bg-indigo-500 text-white text-xs px-3 py-1 rounded">
                  SEE ALL
                </button>
              </div>
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-500 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Referral</th>
                    <th className="px-4 py-3">Visitors</th>
                    <th className="px-4 py-3">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      referral: "Facebook",
                      visitors: "1,480",
                      percent: 60,
                      color: "bg-red-500",
                      bcolor: "bg-red-500/30",
                    },
                    {
                      referral: "Facebook",
                      visitors: "5,480",
                      percent: 70,
                      color: "bg-green-500",
                      bcolor: "bg-green-500/30",
                    },
                    {
                      referral: "Google",
                      visitors: "4,807",
                      percent: 80,
                      color: "bg-purple-500",
                      bcolor: "bg-purple-500/30",
                    },
                    {
                      referral: "Instagram",
                      visitors: "3,678",
                      percent: 75,
                      color: "bg-blue-400",
                      bcolor: "bg-blue-400/30",
                    },
                    {
                      referral: "Twitter",
                      visitors: "2,645",
                      percent: 30,
                      color: "bg-amber-300",
                      bcolor: "bg-amber-300/30",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className=" hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700 font-medium">
                        {row.referral}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {row.visitors}
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className={`${row.bcolor} rounded-full h-2 w-full`}
                        >
                          <div
                            className={`${row.color} h-2 rounded-full`}
                            style={{ width: `${row.percent}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">
                          {row.percent}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Part */}
          <footer className="w-full border-t border-gray-200 pb-5 bg-white">
            <div className="mx-auto px-6 pt-4 font-medium flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-gray-500">
              {/* Left side */}
              <p>Copyright © 2026 Creative Tim | Distributed by ThemeWagon</p>

              {/* Right side */}
              <nav className="flex gap-6">
                <a
                  href="#"
                  className="hover:text-gray-800 font-medium transition"
                >
                  Creative Tim
                </a>
                <a
                  href="#"
                  className="hover:text-gray-800 font-medium transition"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="hover:text-gray-800 font-medium transition"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="hover:text-gray-800 font-medium transition"
                >
                  MIT License
                </a>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HOC(Dashboard);
