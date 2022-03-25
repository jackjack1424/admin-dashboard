import React from 'react'
import "./MemPackageList.css"

import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

const MemPackComp = ({plan, handleDelete}) => {
  return (
    <div class="mt-5 col-sm-6 col-md-4 d-flex align-items-stretch flex-column featured">
        <div class="card  d-flex flex-fill">
          <div class="mt-3 card-body pt-0">
            <div class="row">
              <div class="col-7">
                <h2 class="lead">
                  <b>{plan.plan_name}</b>
                </h2>
                <p class="text-muted text-sm">
                  <b>Description: </b> {plan.plan_description}
                </p>
                <ul class="ml-4 mb-0 fa-ul text-muted">
                  Plan Validity: {plan.plan_validity}
                  <li class="small">
                    {" "}
                    <b>Price: Rs.</b> {plan.plan_price}
                  </li>
                </ul>
              </div>
              {/* <div class="col-5 text-center">
                <Link to={`/admin/packages/${plan.plan_id}`}>
                  <button className="productListEdit">Edit</button>
                </Link>

                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(plan.plan_id)}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default MemPackComp