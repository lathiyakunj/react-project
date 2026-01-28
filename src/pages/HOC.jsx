import {
  FaFingerprint,
  FaMapMarkedAlt,
  FaNewspaper,
  FaNotesMedical,
  FaTable,
  FaTools,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoTvOutline } from "react-icons/io5";
const HOC = (Comp) => {
  const NewComponent = () => {
    // let user = useContext(loginUser);

    // useEffect(() => {
    //   user.setdata(true);
    // }, []);

    // const logOut = () => {
    //   localStorage.removeItem("user");
    //   user.data = false;
    //   user.setdata(user.data);
    // };
    // console.log(window.location);
    const navClass = ({ isActive }) =>
      `my-4 flex 
      ${
        isActive
          ? "text-[#0ea5ed] font-bold hover:text-[#0ea5ed]"
          : "text-[#334155] hover:text-[#64748b]"
      }`;

    return (
      <>
        <div className="flex">
          {/* SideBar */}
          <div className="overflow-auto w-full max-w-63.75 h-[99.99vh] px-5 bg-white border-r border-gray-200 fixed">
            <ul className="pt-4 text-lg pb-4 ps-2">
              <NavLink to="/dashboard">
                <h1 className="uppercase text-[14px] text-[#334155] py-4 pb-7 font-bold">
                  notus react
                </h1>
              </NavLink>
              <hr className="text-gray-200 my-3" />
              <p className="text-[#64748b] text-[12px] pt-2 pb-4 uppercase font-bold">
                Admin Layout Pages
              </p>
              <NavLink className={navClass} to="/dashboard">
                <li className=" -mt-4">
                  <IoTvOutline className="inline me-4 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">
                    Dashboard
                  </span>
                </li>
              </NavLink>
              <NavLink className={navClass} to="/setting">
                <li className=" ">
                  <FaTools className="inline me-4 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">
                    Settings
                  </span>
                </li>
              </NavLink>
              <NavLink className={navClass} to="/tables">
                <li className="">
                  <FaTable className="inline me-3 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">
                    Tables
                  </span>
                </li>
              </NavLink>
              <NavLink className={navClass} to="/maps">
                <li className=" ">
                  <FaMapMarkedAlt className="inline me-4 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">Maps</span>
                </li>
              </NavLink>
              <hr className="text-gray-200 my-6" />
              <p className="text-[#64748b] text-[12px] uppercase font-bold">
                Auth Layout Pages
              </p>
              <NavLink className={navClass} to="/login">
                <li className="">
                  <FaFingerprint className="inline me-3 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">Login</span>
                </li>
              </NavLink>
              <NavLink className={navClass} to="/register">
                <li className="">
                  <FaNotesMedical className="inline me-3 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">
                    register
                  </span>
                </li>
              </NavLink>
              <hr className="text-gray-200 mb-6 mt-11" />
              <p className="text-[#64748b] text-[12px] uppercase font-bold">
                no layout pages
              </p>
              <NavLink className={navClass} to="/landingpage">
                <li className="">
                  <FaNewspaper className="inline me-3 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">
                    Landing Page
                  </span>
                </li>
              </NavLink>
              <NavLink className={navClass} to="/profilepage">
                <li className="">
                  <FaUserCircle className="inline me-3 text-[16px]" />
                  <span className="text-[12px] font-bold uppercase">
                    Profile Page
                  </span>
                </li>
              </NavLink>
              <hr className="text-gray-200" />
            </ul>
          </div>
          <div className="ms-63.75">
            <Comp />
          </div>
        </div>
      </>
    );
  };
  return NewComponent;
};

export default HOC;
