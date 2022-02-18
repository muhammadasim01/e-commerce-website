import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import { Allmobile } from "./components/Allmobile";
import { Samsung } from "./components/Samsung";
import { Iphone } from "./components/Iphone";
import { Huawei } from "./components/Huawei";
import { Others } from "./components/Others";
import Cart from "./components/Cart";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Allproduct } from "./components/Allproduct";
import { Addproduct } from "./components/Addproduct";
import { Users } from "./components/Users";
import { Adminlogin } from "./components/Adminlogin";
import { Adminregister } from "./components/Adminregister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/allmobiles" element={<Allmobile />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/huawei" element={<Huawei />} />
        <Route path="/others" element={<Others />} />
        <Route path="" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/allproduct" element={<Allproduct />} />
        <Route path="/admin/addproduct" element={<Addproduct />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/login" element={<Adminlogin />} />
        <Route path="/admin/register" element={<Adminregister />} />
      </Routes>
    </>
  );
}

export default App;
