import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Tables from "./pages/Tables";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useState } from "react";
import { createContext } from "react";
import Maps from "./pages/Maps";
import Register from "./pages/Register";

export const loginUser = createContext();
function App() {
  const [data, setdata] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log(data);
  // console.log(user);
  return (
    <>
      <BrowserRouter>
        {/* <Dashboard /> */}
        <loginUser.Provider value={{ data, setdata }}>
          <Routes>
            {!data && !user ? (
              // (console.log(data),
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/dashboard" />} /> 
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </>
            )}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </loginUser.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
