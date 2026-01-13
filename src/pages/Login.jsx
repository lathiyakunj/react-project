import { useContext, useRef, useState } from "react";
import { loginUser } from "../App";

function Login() {
  const [obj, setobj] = useState({ email: "", password: "" });
  const [blankObj, setblankObj] = useState({});
  let user = useContext(loginUser);
  let emailRef = useRef();
  let passRef = useRef();
  let eflag = 0;
  let pflag = 0;

  function inputChange(e) {
    obj[e.target.name] = e.target.value;
    blankObj[e.target.name] = "";
    setobj({ ...obj });
    setblankObj({ ...blankObj });
    // console.log(obj);
  }

  function getdata() {
    // email validation
    let eregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (obj.email.length === 0) {
      emailRef.current.innerHTML = "Please Enter Email";
    } else if (!eregex.test(obj.email)) {
      emailRef.current.innerHTML = "Please Enter Valid Email";
    } else {
      emailRef.current.innerHTML = "";
      eflag = 1;
    }

    // password validation
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (obj.password.length === 0) {
      passRef.current.innerHTML = "Please Enter Password";
    } else if (!passRegex.test(obj.password)) {
      passRef.current.innerHTML =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
    } else {
      passRef.current.innerHTML = "";
      pflag = 1;
    }

    if (eflag == 1 && pflag == 1) {
      localStorage.setItem("user", JSON.stringify(obj));
      user.data = true;
      user.setdata(user.data);
      setobj({ ...blankObj });
    }
  }
  //   console.log(user);
  //   console.log(user.data);
  //   console.log(user.setdata);
  return (
    <>
      <div className="bg-gray-50 h-screen w-full">
        <div className="bg-white w-[50%] p-16 shadow-lg  absolute top-[50%] left-[50%] transform -translate-1/2">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Sign in to platform
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
            <p ref={emailRef} className="mb-3 text-red-500"></p>
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
            <p ref={passRef} className="mb-3 text-red-500"></p>
            <button
              type="button"
              onClick={getdata}
              className="py-2 px-3 bg-teal-500 rounded text-white mt-4"
            >
              Login to your account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
