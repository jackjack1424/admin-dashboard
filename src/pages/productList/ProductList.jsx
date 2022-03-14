import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "product",
  //     headerName: "Product",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListImg" src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "stock", headerName: "Stock", width: 200 },
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

  // <Link to={"/product/" + params.row.id}>
  //   <button className="productListEdit">Edit</button>
  // </Link>

  // <DeleteOutline
  //   className="productListDelete"
  //   onClick={() => handleDelete(params.row.id)}
  // />

  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="productList">
      <Link to={"/newProduct/"}>
        <button className="productListEdit">Add</button>
      </Link>

      <div class="mt-5 col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
        <div class="card bg-light d-flex flex-fill">
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-7">
                <h2 class="lead">
                  <b>product_name</b>
                </h2>
                <p class="text-muted text-sm">
                  <b>Description: </b> product_description{" "}
                </p>
                <ul class="ml-4 mb-0 fa-ul text-muted">
                  product_price
                  <li class="small">
                    {" "}
                    <b>Price: Rs.</b> newPrice
                  </li>
                </ul>
              </div>
              <div class="col-5 text-center">
                <Link to={"/product/" /*params.row.id</div>*/}>
                  <button className="productListEdit">Edit</button>
                </Link>

                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(/*params.row.id</div>*/)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
