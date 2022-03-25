import "./MemPackageList.css";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import PackageComp from "./PackageComp";
import MemPackComp from "./MemPackComp"

export default function PackageList() {
  const [data, setData] = useState();
  const history = useNavigate();
  const url = `http://127.0.0.1:8000/admin/membership_plans/`;
  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "package",
  //     headerName: "Package",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="packageListItem">
  //           <img className="packageListImg" src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },

  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },

  //   {
  //     field: "price",
  //     headerName: "Price",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (

  //         <>

  //           <Link to={"/admin/packages/" + params.row.id}>
  //             <button className="productListEdit">Edit</button>
  //           </Link>

  //           <DeleteOutline
  //             className="productListDelete"
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
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(`Error:${err.message}`);
      }
    };
    fetchData();
  }, []);
  console.log("data in state",data);
//   const handleDelete = async (id) => {
//     const resp = await axios.delete(
//       `http://127.0.0.1:8000/admin/membership_plans/${id}`
//     );
//     console.log(resp.status);
//     const list = data.filter((post) => post.plan_id !== id);
//     setData(list);
//     history("/admin/packages");
//   };
  return (
    <div className="productList">
      {/* <Link to={"/admin/newPackage/"}>
        <button className="productListEdit">Add</button>
      </Link> */}
      <div className="container">
      {data &&
          data.map((data) =>
        <MemPackComp key={data.plan_id} plan={data} />)}
      </div>
    </div>
  );
}
