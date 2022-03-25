import "./newEmployee.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewEmployee() {
  // request url= http://127.0.0.1:8000/admin/employees/
  const [credential, setcredential] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    password: "",
    emp_type: "",
    date_of_birth: "",
    address: "",
    state: "",
    zip_code: "",
    primary_phone: "",
    additional_phone: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    aadhar_no: "",
    pan_no: "",
    designation: "",
  });
  const history = useNavigate();

  const submitHandler = async (e) => {
    let data = JSON.stringify({
      first_name: credential.first_name,
      last_name: credential.last_name,
      email_id: credential.email_id,
      password: credential.password,
      emp_type: credential.emp_type,
      date_of_birth: credential.date_of_birth,
      address: credential.address,
      state: credential.state,
      zip_code: credential.zip_code,
      primary_phone: credential.primary_phone,
      additional_phone: credential.additional_phone,
      emergency_contact_name: credential.emergency_contact_name,
      emergency_contact_phone: credential.emergency_contact_phone,
      aadhar_no: credential.aadhar_no,
      pan_no: credential.pan_no,
      designation: credential.designation,
    });
    console.log(data);
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/admin/employees/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.data);
          alert("data inserted successfully");
          history("/admin/Employee");
        })
        .catch(({ response }) => {
          console.log(response.data);
          alert(response.data.detail);
          console.log(response.status);
          console.log(response.headers);
        });
    } catch (err) {
      console.log(`Error:${err.data}`);
    }
  };
  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Employee</h1>
      <form className="newUserForm" onSubmit={submitHandler}>
        <div className="newUserItem">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={credential.first_name}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={credential.last_name}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email_id"
            value={credential.email_id}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={credential.password}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Employee type</label>
          <select
            name="emp_type"
            value={credential.emp_type}
            onChange={onchange}
            required
          >
                <option  selected value> -- select an option -- </option>
            <option value="full time" >Full time</option>
            <option value="part time">Part time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Date of birth</label>
          <input
            type="date"
            max={"2004-01-01"}
            name="date_of_birth"
            value={credential.date_of_birth}
            onChange={onchange}
            required
          />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={credential.address}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>State</label>
          <input
            type="text"
            placeholder="State"
            name="state"
            value={credential.state}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Zip code</label>
          <input
            type="number"
            placeholder="Zip code"
            min={"6"}
            name="zip_code"
            value={credential.zip_code}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Primary Phone</label>
          <input
            type="number"
            placeholder="primary phone"
            
            min={"10"}
            name="primary_phone"
            value={credential.primary_phone}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Additional Phone</label>
          <input
            type="number"
            placeholder="additional phone"
            min={"10"}
            name="additional_phone"
            value={credential.additional_phone}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Emergency Contact Name</label>
          <input
            type="text"
            placeholder="Emergency Contact Name"
            name="emergency_contact_name"
            value={credential.emergency_contact_name}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Emergency Contact Phone</label>
          <input
            type="number"
            placeholder="Emergency Contact Phone"
            min={"10"}
            name="emergency_contact_phone"
            value={credential.emergency_contact_phone}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Aadhar no.</label>
          <input
            type="number"
            placeholder="Aadhar no."
            min={"13"}
            name="aadhar_no"
            value={credential.aadhar_no}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Pan no.</label>
          <input
            type="text"
            placeholder="Pan no."
            min={"10"}
            name="pan_no"
            value={credential.pan_no}
            onChange={onchange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Designation</label>
          <select
            className="newUserSelect"
            name="designation"
            id="designation"
            value={credential.designation}
            onChange={onchange}
            required
          >
                <option  selected value> -- select an option -- </option>
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
