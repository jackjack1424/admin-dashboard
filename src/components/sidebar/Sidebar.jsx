import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Members
              </li>
            </Link>
            <Link to="/employee" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employees
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>

<<<<<<< HEAD

             
            <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Packages
              </li>
            
            
           
            <Link to="/Payment" classname="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Payment
            </li>    
            </Link> 


            
          
            
           

=======
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Packages
            </li>

            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Payment
            </li>
>>>>>>> dd6ad7f7db49da6a2b57539e4474c062638886ae
          </ul>
        </div>
      </div>
    </div>
  );
}
