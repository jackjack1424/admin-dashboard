import React from 'react'
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import "./userList.css";

const UserComp = ({user,handleDelete}) => {
  return (
    <div class="mt-5 col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column featured">
    <div class="card  d-flex flex-fill">
      <div class="card-body pt-0">
        <div class="mt-3 row">
          <div class="col-7">
            <h2 class="lead">
              <b>{user.first_name+" "} {user.last_name}</b>
            </h2>
            <p class="text-muted text-sm">
              <b>Phone no : </b> {user.primary_phone}
            </p>
            <p class="text-muted text-sm">
              <b>Address : </b> {user.address  + " "}{"zipcode: " + user.zip_code+" "}{"State: "+user.state} 
            </p>
            <ul class="ml-4 mb-0 fa-ul text-muted">
              Emergency Details:
              <li class="small">
                <b>Emergency contact: </b> {user.emergency_contact_name}
              </li>
              <li class="small">
                <b>Emergency contact no.</b> {user.emergency_contact_phone}
              </li>
            </ul>
          </div>
          <div class="col-5 text-center">
            <Link to={`/admin/user/${user.user_id}` }>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(user.member_id)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserComp