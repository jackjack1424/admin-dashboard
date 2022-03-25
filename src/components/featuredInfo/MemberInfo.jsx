import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
export default function MemberInfo() {
  const [member, setMember] = useState({});
  const id = localStorage.getItem("user_id");
  const url = `http://127.0.0.1:8000/admin/members/${id}`;
  useEffect(() => {
    const fetchData=async()=>{

      try{
          const response =await axios.get(url);
          console.log(response.data);
          setMember(response.data);
        }catch(err){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          
        }
      }
      fetchData();
    }, []);
    console.log(member);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Hello {member.first_name} </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"></span>
        </div>
      </div>

      {/* <div className="featuredItem">
        <span className="featuredTitle">Current Active Plan</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Plan Valid till:</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">7%</span>
        </div>
      </div> */}
    </div>
  );
}
