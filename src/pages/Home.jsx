import HOC from "./HOC";
import img from "../images/banner.png";

const Home = () => {
  return (
    <>
      <div className="bg-[#f4f6ff]  text-center ">
        <div className="container mx-auto">
          <h1 className="text-7xl text-left text-[#3798a6] font-bold pt-5 mb-10">
            Preserving Our Oceans
          </h1>
          <img src={img} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default HOC(Home);
