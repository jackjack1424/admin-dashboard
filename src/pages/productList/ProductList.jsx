import "./productList.css";
// import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import ProductComp from "./productComp";

export default function ProductList() {
  const history = useNavigate()

  const [data, setData] = useState([]);
  const url = `http://127.0.0.1:8000/admin/product/`;
  
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
    const resp= await axios.delete(`http://127.0.0.1:8000/admin/product/${id}`)
    console.log(resp.status);
    const list = data.filter(post => post.product_id !== id);
    setData(list);
    history('/admin/products')
  }
  return (
    <div className="productList">
      <Link to={"/admin/newProduct/"}>
        <button className="productListEdit">Add</button>
      </Link>

      <div className="container">
        {data &&
          data.map((data) => (
            <ProductComp key={data.product_id} product={data} handleDelete={handleDelete}/>
          ))}
      </div>
    </div>
  );
}
