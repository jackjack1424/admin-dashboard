import "./newEmployee.css";
// import { useState } from "react";

export default function NewEmployee() {
  // request url= http://127.0.0.1:8000/admin/employees/
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Employee</h1>
      <form className="newUserForm" >
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="First Name" required />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Email" required />
          
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" required />
        
        </div>
        <div className="newUserItem">
          <label>Employee type</label>
          <select name="employee type" required>
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Date of birth</label>
          <input type="date" max={"2004-01-01"} required />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Address" required/>
        </div>
        <div className="newUserItem">
          <label>State</label>
          <input type="text" placeholder="State" required/>
        </div>
        <div className="newUserItem">
          <label>Zip code</label>
          <input type="number" placeholder="Zip code" min={"6"} max={"6"} required/>
        </div>
        <div className="newUserItem">
          <label>Primary Phone</label>
          <input type="number" placeholder="primary phone" min={"10"} max={"10"} required/>
        </div>
        <div className="newUserItem">
          <label>Additional Phone</label>
          <input type="number" placeholder="additional phone" min={"10"} max={"10"} />
        </div>
        <div className="newUserItem">
          <label>Emergency Contact Name</label>
          <input type="text" placeholder="Emergency Contact Name"  required/>
        </div>
        <div className="newUserItem">
          <label>Emergency Contact Phone</label>
          <input type="number" placeholder="Emergency Contact Phone" min={"10"} max={"10"} required/>
        </div>
        <div className="newUserItem">
          <label>Aadhar no.</label>
          <input type="number" placeholder="Aadhar no." min={"13"} max={"13"} required/>
        </div>
        <div className="newUserItem">
          <label>Pan no.</label>
          <input type="text" placeholder="Pan no." minLength={"10"} max={"10"} required/>
        </div>
        <div className="newUserItem">
          <label>Designation</label>
          <select className="newUserSelect" name="designation" id="designation" required>
            <option value="admin">Admin</option>
            <option value="receptionist">Receiptionist</option>
            <option value="traniner">Trainer</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
