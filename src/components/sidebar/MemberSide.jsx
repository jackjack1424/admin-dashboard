import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MemberSide = () => {
  return (
    <div className="sidebar" disabled>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Member</h3>
          <ul className="sidebarList">
            <Link to="/member" className="link">
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
            {/* <Link to="/member/editDetails" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Edit Details
              </li>
            </Link> */}
            {/* <Link to="/member/mesurements" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Measurements
              </li>
            </Link> */}

            <Link to="/member/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                view Products Catalog
              </li>
            </Link>

            <Link to="/member/plans" classname="Link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                View Package Catalog
              </li>
            </Link>

            <Link to="/" className="link">
              <li className="sidebarListItem">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemberSide;
