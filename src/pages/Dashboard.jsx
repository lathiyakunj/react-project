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
const Dashboard = () => {
  return (
    <>
      {/* Dashboard Desing */}
      {/* <!-- Stats Section --> */}
      <div className="bg-[#0284c7] px-14 w-274">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-white font-semibold text-sm uppercase">
            Dashboard
          </h1>

          <div className="flex gap-3 align-middle">
            <div className="relative bg-white rounded h-11">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search here..."
                className="ps-9 py-2 w-50 rounded-md text-sm outline-none"
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
    </>
  );
};

export default HOC(Dashboard);
