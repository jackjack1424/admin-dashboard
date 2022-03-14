import "./packageList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { packagesRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PackageList() {
  const [data, setData] = useState(packagesRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "package",
      headerName: "Package",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="packageListItem">
            <img className="packageListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
  
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    
   

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
       
      
          
          <>

            <Link to={"/packages/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>

            
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />

          
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
        <Link to={"/newPackage/" }>
              <button className="productListEdit">Add</button>
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
