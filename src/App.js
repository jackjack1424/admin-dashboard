import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Employeelist from "./pages/Employeelist/Employeelist";
import NewEmployee from "./pages/newEmployee/NewEmployee";
import Employee from "./pages/Employee/Employee";
import Login from "./pages/login/login";
import PackageList from "./pages/packageList/PackageList";
import Package from "./pages/package/Package";
import NewPackage from "./pages/newPackage/NewPackage";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [disable, setdisable] = useState(false);
  const disabling = () => {
    if ((pathname === "/login")) {
      setdisable(true);
    } else {
      setdisable(false);
    }
  };
  useEffect(() => {
    {
     disabling();
    }
  }, [pathname]);

  return (
    <>
      <Topbar />
      <div className="container">
        <div>{disable ? null : <Sidebar />}</div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/Employee" element={<Employeelist />} />
          <Route path="/NewEmployee" element={<NewEmployee />} />
          <Route path="/employee/:employeeId" element={<Employee />} />
          <Route path="/packages" element={<PackageList/>} />
          <Route path="/packages/:packageId" element={<Package/>} />
          <Route path="/newPackage" element={<NewPackage/>} />

        </Routes>
      </div>
    </>
  );
}

export default App;
