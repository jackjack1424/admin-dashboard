import "./newProduct.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const [credential, setcredential] = useState({
    supplier_name: "",
    product_title: "",
    product_description: "",
    product_price: "",
    quantity: "",
  });
  const history = useNavigate();

  const submitHandler = async (e) => {
    let data = JSON.stringify({
      supplier_name: credential.supplier_name,
      product_title: credential.product_title,
      product_description: credential.product_description,
      product_price: credential.product_price,
      quantity: credential.quantity,
    });
    console.log(data);
    e.preventDefault();
    try{

      await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/admin/product",
        data: data,
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          console.log(response.data);
          alert("data inserted successfully");
          history('/admin/products')
        }).catch(({ response }) => { 
          console.log(response.data);  
          alert(response.data.detail);
          console.log(response.status);  
          console.log(response.headers);  
      })
    }catch (err) {
      console.log(`Error:${err.data}`);
    }
  };
  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={submitHandler}>
        {/* <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" name="image" onChange={(e)=>setImage(e.target.files[0])} />
        </div> */}
        <div className="addProductItem">
          <label>supplier name</label>
          <input
            type="text"
            placeholder="supplier name"
            name="supplier_name"
            value={credential.supplier_name}
            onChange={onchange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            name="product_title"
            value={credential.product_title}
            onChange={onchange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="product_description"
            value={credential.product_description}
            onChange={onchange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            min={"0"}
            name="product_price"
            value={credential.product_price}
            onChange={onchange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input
            type="number"
            placeholder="quantity"
            min={"1"}
            name="quantity"
            value={credential.quantity}
            onChange={onchange}
            required
          />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
