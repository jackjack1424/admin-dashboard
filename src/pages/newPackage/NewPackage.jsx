import "./newPackage.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const [credential, setcredential] = useState({
    plan_name: "",
    plan_validity: "",
    plan_price: "",
    plan_description: "",
  });
  const history = useNavigate();

  const submitHandler = async (e) => {
    let data = JSON.stringify({
      plan_name: credential.plan_name,
      plan_validity: credential.plan_validity,
      plan_price: credential.plan_price,
      plan_description: credential.plan_description,
    });
    console.log(data);
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/admin/membership_plans/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.data);
          alert("data inserted successfully");
          history("/admin/packages");
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
      <h1 className="newUserTitle">New Package</h1>
      <form className="newUserForm" onSubmit={submitHandler}>
        <div className="newUserItem">
          <label>Package Name</label>
          <input
            type="text"
            placeholder="Package Name"
            name="plan_name"
            value={credential.plan_name}
            onChange={onchange}
            required
          />
        </div>

        <div className="newUserItem">
          <label>Package Validity</label>
          <input
            type="text"
            placeholder="Package Validity"
            name="plan_validity"
            value={credential.plan_validity}
            onChange={onchange}
            required
          />
        </div>

        <div className="newPackageRateItem">
          <label>Package Rate</label>
          <input
            type="number"
            placeholder="Amount"
            min={"0"}
            name="plan_price"
            value={credential.plan_price}
            onChange={onchange}
            required
          />
        </div>

        <div className="newPackageDescriptionItem">
          <label>Package Description</label>
          <input
            type="text"
            placeholder="Info"
            name="plan_description"
            value={credential.plan_description}
            onChange={onchange}
            required
          />
        </div>

        <button className="newPackageButton">Create</button>
      </form>
    </div>
  );
}
