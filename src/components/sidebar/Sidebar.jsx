import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSide from "./AdminSide";
import MemberSide from "./MemberSide";

export default function Sidebar() {
  const [disable, setdisable] = useState(false);
  const user_type = localStorage.getItem("user_type");
  console.log(user_type);
  const disabling = () => {
    if (( user_type=== "member")) {
      setdisable(true);
    } else {
      setdisable(false);
    }
  };
  useEffect(() => {
    {
     disabling();
    }
  }, [user_type]);

  return (
    <>
      {disable ? <MemberSide/> :<AdminSide />}
    </>
  );
}
