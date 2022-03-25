import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import UserComp from "./UserComp";

export default function UserList() {
  const [data, setData] = useState([]);
  const history = useNavigate();
  const url = `http://127.0.0.1:8000/admin/members/`;
  

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "user",
  //     headerName: "User",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="userListUser">
  //           <img className="userListImg" src={params.row.avatar} alt="" />
  //           {params.row.username}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "email", headerName: "Email", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "transaction",
  //     headerName: "Transaction Volume",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           {/* <Link to={"/admin/user/" + params.row.id}>
  //             <button className="userListEdit">Edit</button>
  //           </Link> */}

  //           <DeleteOutline
  //             className="userListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />

  //         </>

  //       );
  //     },
  //   },
  // ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        console.log("response data", response.data);
        setData(response.data);
      } catch (err) {
        console.log(`Error:${err.message}`);
      }
    };
    fetchData();
  }, []);
  console.log("Data in state", data);
  const handleDelete=async (id)=>{
    const resp= await axios.delete(`http://127.0.0.1:8000/admin/members/${id}`)
    console.log(resp.status);
    const list = data.filter(post => post.member_id !== id);
    setData(list);
    history('/admin/users')
  }
  return (
    <div className="userList">
      <Link to={"/admin/newUser/"}>
        <button className="userListEdit">Add</button>
      </Link>
      <div className="container">
        {data &&
          data.map((data) => <UserComp key={data.member_id} user={data} handleDelete={handleDelete} />)}
      </div>
    </div>
  );
}
