import React from 'react'
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import "./Employeelist.css";

const EmpComp = ({emp, handleDelete}) => {
  return (
    <div class="mt-5 col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column featured">
    <div class="card d-flex flex-fill">
      <div class="card-body pt-0">
        <div class="mt-3 row">
          <div class="col-7">
            <h2 class="lead">
              <b>{emp.first_name+" "} {emp.last_name}</b>
            </h2>
            <p class="text-muted text-sm">
              <b>Phone no : </b> {emp.primary_phone}
            </p>
            <p class="text-muted text-sm">
              <b>Address : </b> {emp.address  + " "}{"zipcode: " + emp.zip_code+" "}{"State: "+emp.state} 
            </p>
            <ul class="ml-4 mb-0 fa-ul text-muted">
              Emergency Details:
              <li class="small">
                <b>Emergency contact: </b> {emp.emergency_contact_name}
              </li>
              <li class="small">
                <b>Emergency contact no.</b> {emp.emergency_contact_phone}
              </li>
            </ul>
          </div>
          <div class="col-5 text-center">
            <Link to={`/admin/employee/${emp.employee_id}`}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(emp.employee_id)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmpComp