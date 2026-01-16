import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import validationJson from "../ValidationJson.json";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const ForgotPassword = () => {
  const [obj, setobj] = useState({
    email: "",
  });
  const [blankObj, setblankObj] = useState({});
  const [errorObj, seterrorObj] = useState({});
  let navigate = useNavigate();

  function inputChange(e) {
    obj[e.target.name] = e.target.value;
    blankObj[e.target.name] = "";
    setobj({ ...obj });
    setblankObj({ ...blankObj });
    checkValidation(e.target.name);
  }

  function checkValidation(name) {
    let validationObj = validationJson.find((values) => values.name == name);
    let validObj = validationObj?.conditions.find((value) =>
      eval(value.condition)
    );

    if (validObj) {
      errorObj[name] = validObj.error;
    } else {
      delete errorObj[name];
    }
    seterrorObj({ ...errorObj });
  }

  function getdata() {
    Object.keys(obj).forEach((values) => {
      checkValidation(values);
    });

    if (Object.keys(errorObj).length == 0) {
      setobj({ ...blankObj });
      navigate("/changepassword");
    }
  }
  return (
    <>
      <div className="signin bg-gray-800 h-screen w-full flex items-center justify-center">
        <div className="bg-[#e2e8f0] w-[28%] p-8 rounded-lg shadow-xl">
          <h1 className="text-[14px] font-bold mb-6 text-center text-gray-500">
            Forgot Password
          </h1>

          {/* Social buttons */}
          <div className="flex gap-3 justify-center mt-1 mb-6">
            <button
              type="button"
              className="bg-white rounded py-2 px-4 hover:bg-gray-50 shadow hover:shadow-md transition-all duration-300"
            >
              <span className="font-medium">
                {" "}
                <FaGithub className="inline me-1 text-[20px]" />
                GitHub
              </span>
            </button>
            <button
              type="button"
              className="bg-white rounded py-2 px-4 hover:bg-gray-50 shadow hover:shadow-md transition-all duration-300"
            >
              <span className="font-medium">
                <FcGoogle className="inline me-1 text-[20px]" />
                Google
              </span>
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">
              Or sign up with credentials
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Form with Validation */}
          <form>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={inputChange}
              value={obj.email ?? ""}
              className="w-full border bg-white border-gray-300 shadow rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p className="mb-3 text-sm text-red-500">{errorObj?.email}</p>

            <button
              type="button"
              onClick={getdata}
              className="w-full bg-gray-900 text-white py-2 uppercase rounded font-semibold hover:bg-gray-800 transition"
            >
              forgot password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
