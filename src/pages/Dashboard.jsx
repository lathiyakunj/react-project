import HOC from "./HOC";
const Dashboard = () => {
  return (
    <>
    
      {/* Header */}
      {/* <div className="w-full fix flex h-17 p-2 border-b border-gray-400">
        <div className="flex py-2 pe-5 ps-4 w-80">
          <img src={img} alt="" className="h-6 mt-1 w-6 me-2 " />
          <h3 className="font-bold text-[21px]">Windster</h3>
        </div>
        <div className="w-full">
          <div className=" flex justify-between items-center text-[#6b7280]">
            <label
              htmlFor="input"
              className=" inline-block py-2 bg-[#f9fafb] border  hover:cursor-text my-0.5 border-gray-200 rounded-xl"
            >
              <MdOutlineSearch fontSize={22} className="inline-block me-3" />
              <input
                id="input"
                type="text"
                className="focus:outline-0 placeholder:text-[#6b7280] text-[#6b7280]"
                placeholder="Search"
              />
            </label>

            <div>
              <span className=" font-normal text-gray-500  mr-5">
                Open source ❤️
              </span>
              <span>
                <div className="border inline-flex border-gray-400 bg-[#f0f4f7] text-black rounded">
                  <div className="items-center px-3 py-1 flex text-[12px]">
                    <IoStarOutline className=" text-[16px]" />
                    <span className="ps-1"> Star</span>
                  </div>
                  <span className="bg-white py-1 text-[12px] border-l px-2.5  border-gray-400">
                    6
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-63.75 h-[89.2vh] px-5 bg-white border-r border-gray-400">
        <ul className="pt-5 text-lg pb-4">
          <NavLink to="/home">
            <li className="text-[#201827] my-4  mt-0 flex items-center">
              <RiHome4Fill className="inline text-[#6b7280] me-4 text-[20px]" />
              Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="text-[#201827]  my-4 flex items-center">
              <FaUserAlt className="inline me-4 text-[#6b7280]" />
              About
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="text-[#201827]  flex items-center">
              <BiSolidPhoneCall className="inline me-3 text-[#6b7280] text-[22px]" />
              Contact
            </li>
          </NavLink>
        </ul>
      </div> */}
      Dashboard
    </>
  );
};

export default HOC(Dashboard);
