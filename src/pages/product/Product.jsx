import { Link } from "react-router-dom";
import "./product.css";
import {useState} from "react";
import {  useNavigate } from "react-router-dom";
import { Publish } from "@material-ui/icons";

export default function Product() {
  
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          
          {/* <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://m.media-amazon.com/images/I/41mW61GjvfS._SL160_.jpg" alt="" className="productInfoImg" />
                  <span className="productName">Whey Protein</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div> */}
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
=======
              <div className="addProductItem">
          <label>supplier name</label>
          <input type="text" placeholder="supplier name" required name="supplier_name" onChange={onchange} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Title" required/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Description" required/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="Price" min={"0"} required/>
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input type="number" placeholder="quantity" min={"1"} required/>
        </div>

              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://m.media-amazon.com/images/I/41mW61GjvfS._SL160_.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
