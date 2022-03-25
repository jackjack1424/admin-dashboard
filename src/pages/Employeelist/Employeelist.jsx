import "./Employeelist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { EmployeeRows } from "../../dummyData";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import EmpComp from "./EmpComp";
 
export default function EmployeeList() {
  const history = useNavigate()

  const [data, setData] = useState([]);
  const url = `http://127.0.0.1:8000/admin/employees/`;

  
  useEffect(() => {
    
    const fetchData = async () => {
      try{
      const response = await axios.get(url);
      console.log("response data", response.data);
      setData(response.data);
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
    };
  fetchData();
},[]);
console.log("Data in state", data);


const handleDelete=async (id)=>{
  const resp= await axios.delete(`http://127.0.0.1:8000/admin/employees/${id}`)
  console.log(resp.status);
  const list = data.filter(post => post.employee_id !== id);
  setData(list);
  history('/admin/Employee')
}
  return (
    <div className="userList">
      <Link to={"/admin/newEmployee/"}>
        <button className="employeeListEdit">Add</button>
      </Link>
      <div className="container">
        
      {data &&
        data.map((data) => (
          <EmpComp key={data.employee_id} emp={data}  handleDelete={handleDelete} />
        ))}{" "}
      </div>
    </div>
  );
}
