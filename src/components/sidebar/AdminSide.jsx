import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
} from "@material-ui/icons";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export default function Sidebar() {
return(
<div className="sidebar" disabled>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">

          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
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
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Members
              </li>
            </Link>
            <Link to="/admin/employee" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employees
              </li>
            </Link>

            <Link to="/admin/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>

           <Link to="/admin/packages" classname="Link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Packages
            </li>
            </Link>


          
            <Link to="/" className="link">
              <li className="sidebarListItem">
               
                Logout
              </li>
            </Link>
            








          </ul>
        </div>
      </div>
    </div>
    );
}