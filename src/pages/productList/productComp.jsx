import React from "react";
import "./productList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductComp = ({ product, handleDelete }) => {
  
  return (
      <div class="mt-5 col-sm-6 col-md-4 d-flex align-items-stretch flex-column featured">
        <div class="card  d-flex flex-fill">
          <div class="mt-3 card-body pt-0">
            <div class="row">
              <div class="col-7">
                <h2 class="lead">
                  <b>{product.product_title}</b>
                </h2>
                <p class="text-muted text-sm">
                  <b>Description: </b> {product.product_description}
                </p>
                <ul class="ml-4 mb-0 fa-ul text-muted">
                  Quantity Available: {product.quantity}
                  <li class="small">
                    {" "}
                    <b>Price: Rs.</b> {product.product_price}
                  </li>
                </ul>
              </div>
              <div class="col-5 text-center">
                <Link to={`/admin/product/${product.product_id}`}>
                  <button className="productListEdit">Edit</button>
                </Link>

                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(product.product_id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductComp;
