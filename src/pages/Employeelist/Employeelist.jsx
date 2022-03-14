import "./Employeelist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { EmployeeRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EmployeeList() {
  const [data, setData] = useState(EmployeeRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "employee",
      headerName: "Employee",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 160,
    },
    


    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
      
      

          <>
            <Link to={"/employee/" + params.row.id}>
              <button className="employeeListEdit">Edit</button>
            </Link>

          
            <DeleteOutline
              className="employeeListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Link to={"/newEmployee/"}>
        <button className="employeeListEdit">Add</button>
      </Link>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
