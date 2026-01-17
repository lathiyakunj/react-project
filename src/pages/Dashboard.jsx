import HOC from "./HOC";
import img from "../images/dashboard_profile.jpg";
import { FaSearch } from "react-icons/fa";
const Dashboard = () => {
  return (
    <>
      {/* Dashboard */}

      {/* Dashboard Desing */}
      {/* <!-- Stats Section --> */}
      <div className="bg-[#0284c7] px-15 ">
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
            <div className="bg-white rounded shadow-md p-5 flex justify-between items-start">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  Traffic
                </p>
                <p className="text-xl font-semibold text-gray-700">350,897</p>
                <p className="text-sm mt-3 text-gray-400">
                  <span className="text-green-500 mr-2">
                    <i className="fas fa-arrow-up"></i> 3.48%
                  </span>
                  Since last month
                </p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white">
                <i className="far fa-chart-bar"></i>
              </div>
            </div>

            <div className="bg-white rounded shadow-md p-5 flex justify-between items-start">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  New Users
                </p>
                <p className="text-xl font-semibold text-gray-700">2,356</p>
                <p className="text-sm mt-3 text-gray-400">
                  <span className="text-red-500 mr-2">
                    <i className="fas fa-arrow-down"></i> 3.48%
                  </span>
                  Since last week
                </p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white">
                <i className="fas fa-chart-pie"></i>
              </div>
            </div>

            <div className="bg-white rounded shadow-md p-5 flex justify-between items-start">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  Sales
                </p>
                <p className="text-xl font-semibold text-gray-700">924</p>
                <p className="text-sm mt-3 text-gray-400">
                  <span className="text-orange-500 mr-2">
                    <i className="fas fa-arrow-down"></i> 1.10%
                  </span>
                  Since yesterday
                </p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white">
                <i className="fas fa-users"></i>
              </div>
            </div>

            <div className="bg-white rounded shadow-md p-5 flex justify-between items-start">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">
                  Performance
                </p>
                <p className="text-xl font-semibold text-gray-700">49.65%</p>
                <p className="text-sm mt-3 text-gray-400">
                  <span className="text-green-500 mr-2">
                    <i className="fas fa-arrow-up"></i> 12%
                  </span>
                  Since last month
                </p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 text-white">
                <i className="fas fa-percent"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Dashboard);
