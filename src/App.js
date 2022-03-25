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
import Login from "./pages/login/Login";
import PackageList from "./pages/packageList/PackageList";
import Package from "./pages/package/Package";
import NewPackage from "./pages/newPackage/NewPackage";
import MemberHome from "./pages/home/MemberHome";
import MemPackageList from "./pages/MemPackageList/MemPackageList";
import MemProductList from "./pages/MemProductList/MemProductList"

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [disable, setdisable] = useState(false);
  const disabling = () => {
    if ((pathname === "/" || pathname==="/")) {
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
      <div className="container1">
        <div>{disable ? null : <Sidebar />}</div>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin" element={<Home />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/user/:userId" element={<User />} />
          <Route path="/admin/newUser" element={<NewUser />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/product/:productId" element={<Product />} />
          <Route path="/admin/newproduct" element={<NewProduct />} />
          <Route path="/admin/Employee" element={<Employeelist />} />
          <Route path="/admin/NewEmployee" element={<NewEmployee />} />
          <Route path="/admin/employee/:employeeId" element={<Employee />} />
          <Route path="/admin/packages" element={<PackageList/>} />
          <Route path="/admin/packages/:packageId" element={<Package/>} />
          <Route path="/admin/newPackage" element={<NewPackage/>} />
          <Route path="/member/editDetails" element={<User/>}/>
          <Route path="/member" element={<MemberHome/>}/>
          <Route path="/member/plans" element={<MemPackageList/>}/>
          <Route path="/member/products" element={<MemProductList />} />
          {/*<Route path="/member/mesurements" element={<Measurements/>}/>
          <Route path="/member/checkout" element={<Checkout/>}/>
           */}

        </Routes>
      </div>
    </>
  );
}

export default App;
