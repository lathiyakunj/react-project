import img from "../images/logo.svg";
import { FaNotesMedical, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdDiamond, MdMoveToInbox, MdOutlineSearch } from "react-icons/md";
import { TbChartPieFilled } from "react-icons/tb";
import { HiMiniRectangleStack, HiMiniSquares2X2 } from "react-icons/hi2";
import { GoSignOut } from "react-icons/go";
import { RiTerminalWindowFill } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { loginUser } from "../App";
import { IoHelpBuoy, IoStarOutline } from "react-icons/io5";
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
        <div className="w-full fix flex h-17 p-2 border-b border-gray-200">
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
        </div>

        <div className="flex">
          {/* SideBar */}
          <div className="w-full max-w-63.75 h-[89.3vh] px-5 bg-white border-r border-gray-200">
            <ul className="pt-5 text-lg pb-4">
              <NavLink to="/dashboard">
                <li className=" text-[#6b7280] hover:bg-gray-100 hover:text-black p-2 rounded-lg  mt-0 flex items-center">
                  <TbChartPieFilled className="inline  me-4 text-[20px]" />
                  <span className="text-[#201827]">Dashboard</span>
                </li>
              </NavLink>
              <NavLink to="/khanban">
                <li className="text-[#6b7280] hover:bg-gray-100 hover:text-black p-2 rounded-lg hover:text[] my-1.5 flex items-center">
                  <HiMiniSquares2X2 className="inline me-4" />
                  <span className="text-[#201827]">Khanban</span>
                </li>
              </NavLink>
              <NavLink to="/inbox">
                <li className="text-[#6b7280] hover:bg-gray-100 hover:text-black p-2 rounded-lg mt-0.5 hover:text[] flex items-center">
                  <MdMoveToInbox className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">Inbox</span>
                </li>
              </NavLink>
              <NavLink to="/user">
                <li className="text-[#6b7280] hover:bg-gray-100 hover:text-black p-2 rounded-lg hover:text[] my-1.5 flex items-center">
                  <FaUserAlt className="inline me-4" />
                  <span className="text-[#201827]">Users</span>
                </li>
              </NavLink>
              <NavLink to="/products">
                <li className="text-[#6b7280] hover:bg-gray-100 hover:text-black p-2 rounded-lg mt-0.5 hover:text[] flex items-center">
                  <FaShoppingBag className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">Products</span>
                </li>
              </NavLink>
              <NavLink to="/signin">
                <li className="text-[#6b7280] hover:bg-gray-100 hover:text-black p-2 rounded-lg mt-0.5 hover:text[] flex items-center">
                  <GoSignOut className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">SignIn</span>
                </li>
              </NavLink>
              <NavLink to="/signup">
                <li className="text-[#6b7280] hover:bg-gray-100 hover:text-black p-2 mb-2 rounded-lg mt-0.5 hover:text[] flex items-center">
                  <RiTerminalWindowFill className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">SignUp</span>
                </li>
              </NavLink>
              <hr className="text-gray-200" />
              <NavLink to="/upgradetopro">
                <li className="text-[#6b7280] hover:bg-gray-100  hover:text-black p-2 rounded-lg mt-1.5 hover:text[] flex items-center">
                  <MdDiamond className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">UpgradeToPro</span>
                </li>
              </NavLink>
              <NavLink to="/documentation">
                <li className="text-[#6b7280] hover:bg-gray-100  hover:text-black p-2 rounded-lg mt-1.5 hover:text[] flex items-center">
                  <FaNotesMedical className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">Documentation</span>
                </li>
              </NavLink>
              <NavLink to="/components">
                <li className="text-[#6b7280] hover:bg-gray-100  hover:text-black p-2 rounded-lg mt-1.5 hover:text[] flex items-center">
                  <HiMiniRectangleStack className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">Components</span>
                </li>
              </NavLink>
              <NavLink to="/help">
                <li className="text-[#6b7280] hover:bg-gray-100  hover:text-black p-2 rounded-lg mt-1.5 hover:text[] flex items-center">
                  <IoHelpBuoy className="inline me-3 text-[22px]" />
                  <span className="text-[#201827]">Help</span>
                </li>
              </NavLink>
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
