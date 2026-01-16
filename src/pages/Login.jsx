import {useState } from "react";
import { useNavigate } from "react-router-dom";
import validationJson from "../ValidationJson.json";

function Login() {
  const [obj, setobj] = useState({ email: "", password: "" });
  const [blankObj, setblankObj] = useState({});
  const [errorObj, seterrorObj] = useState({});
  // let user = useContext(loginUser);
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
      navigate("/dashboard");
    }
  }
  return (
    <>
      <div className="bg-gray-50 h-screen w-full">
        <div className="bg-white w-[50%] p-16 shadow-lg  absolute top-[50%] left-[50%] transform -translate-1/2">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Log in to platform
          </h1>

          <form>
            <label htmlFor="email">Email:</label>
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
            <button
              type="button"
              onClick={getdata}
              className="py-2 px-3 bg-teal-500 rounded text-white mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
