import {
  FaFingerprint,
  FaMapMarkedAlt,
  FaNotesMedical,
  FaTable,
  FaTools,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdDiamond } from "react-icons/md";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { useContext, useEffect } from "react";
import { loginUser } from "../App";
import { IoHelpBuoy, IoTvOutline } from "react-icons/io5";
const HOC = (Comp) => {
  const NewComponent = () => {
    let user = useContext(loginUser);

    useEffect(() => {
      user.setdata(true);
    }, []);

    const logOut = () => {
      localStorage.removeItem("user");
      user.data = false;
      user.setdata(user.data);
    };
    console.log(window.location);
    return (
      <>
        {/* <div className="w-full fix flex h-17 p-2 border-b border-gray-200">
          <NavLink to="/home">
            <div className="flex py-2 pe-5 ps-4 w-65">
              <img src={img} alt="" className="h-6 mt-1 w-6 me-2 " />
              <h3 className="font-bold text-[21px]">Windster</h3>
            </div>
          </NavLink>
          <div className="w-full">
            <div className=" flex justify-between  items-center text-[#6b7280]">
              <label
                htmlFor="input"
                className="mt-2 px-3 py-1.5 w-63 ms-1 hover:outline-[#3798a6] bg-[#f9fafb] hover:outline-2 outline hover:cursor-text my-0.5 outline-gray-300 rounded-lg"
              >
                <MdOutlineSearch fontSize={22} className="inline-block me-2" />
                <input
                  id="input"
                  type="text"
                  className="focus:outline-0 placeholder:text-[#6b7280] text-[#222121]"
                  placeholder="Search"
                />
              </label>

              <div>
                <span className=" font-normal text-gray-500  mr-5">
                  Open source ❤️
                </span>
                <div className="border inline-flex mr-3 border-gray-400 bg-[#f0f4f7] text-black rounded">
                  <div className="items-center px-3 py-1 flex text-[12px]">
                    <IoStarOutline className=" text-[16px]" />
                    <span className="ps-1"> Star</span>
                  </div>
                  <span className="bg-white py-1 text-[12px] border-l px-2.5  border-gray-400">
                    6
                  </span>
                </div>
                <button
                  className="py-2 px-3 bg-teal-500 rounded text-white me-4"
                  onClick={logOut}
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex">
          {/* SideBar */}
          <div className="w-full max-w-63.75 h-[89.3vh] px-5 bg-white border-r border-gray-200">
            <ul className="pt-4 text-lg pb-4 ps-2">
              <h1 className="uppercase text-[14px] text-[#334155] py-4 pb-7 font-bold">
                notus react
              </h1>
              <hr className="text-gray-200 my-3" />
              <p className="text-[#334155] text-[12px] pt-2 pb-4 uppercase font-semibold">
                Admin Layout Pages
              </p>
              <NavLink to="/dashboard">
                <li className=" text-[#6b7280 my-5 rounded-lg  mt-1">
                  <IoTvOutline className="inline text-[#cbd5e1] me-4 text-[18px]" />
                  <span className="text-[#334155] text-[12px] font-bold uppercase">
                    Dashboard
                  </span>
                </li>
              </NavLink>
              <NavLink to="/setting">
                <li className="text-[#6b7280 my-5 rounded-lg hover:tems-center">
                  <FaTools className="inline me-4 text-[#cbd5e1] text-[18px]" />
                  <span className="text-[#334155] text-[12px] font-bold uppercase">
                    Settings
                  </span>
                </li>
              </NavLink>
              <NavLink to="/tables">
                <li className="text-[#6b7280 my-5 rounded-lg mt-0.5 flex items-center">
                  <FaTable className="inline me-3 text-[#cbd5e1] text-[18px]" />
                  <span className="text-[#334155] text-[12px] font-bold uppercase">
                    Tables
                  </span>
                </li>
              </NavLink>
              <NavLink to="/maps">
                <li className="text-[#6b7280 my-5 rounded-lg hover:tems-center">
                  <FaMapMarkedAlt className="inline text-[#cbd5e1] me-4 text-[18px]" />
                  <span className="text-[#334155] text-[12px] font-bold uppercase">
                    Maps
                  </span>
                </li>
              </NavLink>
              <hr className="text-gray-200 my-3" />
              <p className="text-[#334155] text-[12px] pt-2 pb-4 uppercase font-semibold">
                Auth Layout Pages
              </p>
              <NavLink to="/login">
                <li className="text-[#6b7280 my-5 rounded-lg mt-0.5 flex items-center">
                  <FaFingerprint className="inline text-[#cbd5e1] me-3 text-[18px]" />
                  <span className="text-[#334155] text-[12px] font-bold uppercase">
                    Login
                  </span>
                </li>
              </NavLink>
              <NavLink to="/register">
                <li className="text-[#6b7280] my-5 rounded-lg mt-1.5 flex items-center">
                  <FaNotesMedical className="inline text-[#cbd5e1] me-3 text-[18px]" />
                  <span className="text-[#334155] text-[12px] font-bold uppercase">
                    register
                  </span>
                </li>
              </NavLink>
              <hr className="text-gray-200" />
            </ul>
          </div>
          <div className="">
            <Comp />
          </div>
        </div>
      </>
    );
  };
  return NewComponent;
};

export default HOC;
