import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import validationJson from "../ValidationJson.json";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SignIn = () => {
  const [obj, setobj] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
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
    }
  }
  return (
    <>
      {/* <div className="bg-gray-50 h-screen w-full">
        <div className="bg-white w-[50%] p-16 shadow-lg  absolute top-[50%] left-[50%] transform -translate-1/2">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Sign in to platform
          </h1>

          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="user123"
              onChange={inputChange}
              value={obj.name ?? ""}
              className="outline outline-gray-300 bg-gray-50 w-full p-2 mt-1 mb-1 focus:outline-3 focus:outline-teal-500 text-gray-900 rounded"
            />
            <p className="mb-3 text-red-500">{errorObj?.name}</p>
            <label htmlFor="name">Name:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user123@gmail.com"
              onChange={inputChange}
              value={obj.email ?? ""}
              className="outline outline-gray-300 bg-gray-50 w-full p-2 mt-1 mb-1 focus:outline-3 focus:outline-teal-500 text-gray-900 rounded"
            />
            <p className="mb-3 text-red-500">{errorObj?.email}</p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              onChange={inputChange}
              value={obj.password ?? ""}
              className="outline outline-gray-300 bg-gray-50 w-full p-2 mt-1 mb-4 focus:outline-3 focus:outline-teal-500 text-gray-900 rounded"
            />
            <p className="mb-3 text-red-500">{errorObj?.password}</p>
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="••••••••"
              onChange={inputChange}
              value={obj.cpassword ?? ""}
              className="outline outline-gray-300 bg-gray-50 w-full p-2 mt-1 mb-4 focus:outline-3 focus:outline-teal-500 text-gray-900 rounded"
            />
            <p className="mb-3 text-red-500">{errorObj?.cpassword}</p>
            <button
              type="button"
              onClick={getdata}
              className="py-2 px-3 bg-teal-500 rounded text-white mt-4"
            >
              Signin to your account
            </button>
          </form>
        </div>
      </div> */}

      <div className="signin bg-gray-800 h-screen w-full flex items-center justify-center">
        <div className="bg-[#e2e8f0] w-[28%] p-8 rounded-lg shadow-xl">
          <h1 className="text-[14px] font-bold mb-6 text-center text-gray-500">
            Sign up with
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

            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={inputChange}
              value={obj.password ?? ""}
              className="w-full border bg-white border-gray-300 shadow rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p className="mb-3 text-sm text-red-500">{errorObj?.password}</p>
            <div className="flex items-center gap-2 ms-1 mt-2 mb-7">
              <input
                type="checkbox"
                name="check"
                id="check"
                onChange={inputChange}
                // checked={obj.email ?? false}
                className="h-5 w-5  border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <label
                htmlFor="check"
                className="text-sm font-medium text-gray-700"
              >
                Remember me
              </label>
            </div>

            <button
              type="button"
              onClick={getdata}
              className="w-full bg-gray-900 text-white py-2 uppercase rounded font-semibold hover:bg-gray-800 transition"
            >
              login
            </button>
          </form>

          <div className="mt-3 flex justify-between text-gray-700">
            {/* <NavLink to={"/forgotpassword"}>Forgot Password?</NavLink> */}
            <p>Forgot Password?</p>
            <NavLink to={"/signin"}>Create New Account?</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
