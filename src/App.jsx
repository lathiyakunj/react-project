import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Khanban from "./pages/Khanban";
import Inbox from "./pages/Inbox";
import User from "./pages/User";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UpgradeToPro from "./pages/UpgradeToPro";
import Documentation from "./pages/Documentation";
import Components from "./pages/Components";
import Help from "./pages/Help";
import Login from "./pages/Login";
import { useState } from "react";
import { createContext } from "react";

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
                <Route path="/khanban" element={<Khanban />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/user" element={<User />} />
                <Route path="/products" element={<Products />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/upgradetopro" element={<UpgradeToPro />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/components" element={<Components />} />
                <Route path="/help" element={<Help />} />
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
