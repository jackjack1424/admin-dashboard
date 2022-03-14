
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function Login() {
  const [credential, setcredential] = useState({ username: "", password: "" });
  const history = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/admin/login", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(
        `grant_type=&username=${credential.username}&password=${credential.password}&scope=&client_id=&client_secret=`
      ),
    });
    // console.log(credential.username);
    // console.log(credential.password);

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem('token',json.token);
      history("/");
      console.log(localStorage)
    } else {
      alert('invalid credentials')
    }
  };

  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <form
      className=" col-md-6 col-md-offset-6"
      onSubmit={submitHandler}
    >
      <div className="mb-3 my-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={onchange}
          name="username"
          type="email"
          className="form-control"
          id="username"
          value={credential.username}
          aria-describedby="emailHelp"
          required
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={onchange}
          name="password"
          type="password"
          className="form-control"
          id="password"
          value={credential.password}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-dark my-2">
        Submit
      </button>
    </form>
  );
}
