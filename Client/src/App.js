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
import Forgot from "./components/Forgot";
import ResetPassword from "./components/ResetPassword";
import ForgotAdmin from "./components/ForgotAdmin";
import AdminResetPassword from "./components/AdminResetPassword";
import ProductDetails from "./components/ProductDetails";
import { Orders } from "./components/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/allmobiles" element={<Allmobile />} />
        <Route path="/productinfo/:id" element={<ProductDetails />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/huawei" element={<Huawei />} />
        <Route path="/others" element={<Others />} />
        <Route path="" element={<Cart />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/allproduct" element={<Allproduct />} />
        <Route path="/admin/addproduct" element={<Addproduct />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/login" element={<Adminlogin />} />
        <Route path="/admin/register" element={<Adminregister />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/admin/forgot" element={<ForgotAdmin />} />
        <Route path="/create/:id/:token" element={<ResetPassword />} />
        <Route
          path="/admin/create/:id/:token"
          element={<AdminResetPassword />}
        />
      </Routes>
    </>
  );
}

export default App;
