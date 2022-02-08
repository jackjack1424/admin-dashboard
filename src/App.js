import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Employeelist from "./pages/Employeelist/Employeelist";
import NewEmployee from "./pages/newEmployee/NewEmployee";
import Employee from "./pages/Employee/Employee";
import "./pages/Payment/Payment";
import { Payment } from "@material-ui/icons";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
         <Route path="/Employee">
           <Employeelist/>
         </Route>
         <Route path="/NewEmployee">
           <NewEmployee/>
         </Route>
         <Route path="/employee/:employeeId">
           <Employee/>
         </Route>
         <Route path="payment/:paymentId">
           <Payment/>
         </Route>
         
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
