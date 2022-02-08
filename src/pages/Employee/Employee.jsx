import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./Employee.css";
  
  export default function Employee() {
    return (
      <div className="employee">
        <div className="employeeTitleContainer">
          <h1 className="employeeTitle">Edit Employee</h1>
          <Link to="/newEmployee">
            <button className="employeeAddButton">Add</button>
          </Link>
        </div>
        <div className="employeeContainer">
          <div className="employeeShow">
            <div className="employeeShowTop">
              <img
                src="https://varnam.my/wp-content/uploads/2021/01/FB_IMG_1605666747087-2.jpg"
                alt=""
                className="employeeShowImg"
              />
              <div className="employeeShowTopTitle">
                <span className="employeeShowemployeename">Chad Xavier</span>
                <span className="employeeShowemployeeTitle">Member</span>
              </div>
            </div>
            <div className="employeeShowBottom">
              <span className="employeeShowTitle">Account Details</span>
              <div className="employeeShowInfo">
                <PermIdentity className="employeeShowIcon" />
                <span className="employeeShowInfoTitle">ChadXavier</span>
              </div>
              <div className="employeeShowInfo">
                <CalendarToday className="employeeShowIcon" />
                <span className="employeeShowInfoTitle">14-04-2001</span>
              </div>
              <span className="employeeShowTitle">Contact Details</span>
              <div className="employeeShowInfo">
                <PhoneAndroid className="employeeShowIcon" />
                <span className="employeeShowInfoTitle">920420420</span>
              </div>
              <div className="employeeShowInfo">
                <MailOutline className="employeeShowIcon" />
                <span className="employeeShowInfoTitle">chadxavier69@gmail.com</span>
              </div>
              <div className="employeeShowInfo">
                <LocationSearching className="employeeShowIcon" />
                <span className="employeeShowInfoTitle">Akhand Bharat</span>
              </div>
            </div>
          </div>
          <div className="employeeUpdate">
            <span className="employeeUpdateTitle">Edit</span>
            <form className="employeeUpdateForm">
              <div className="employeeUpdateLeft">
                <div className="employeeUpdateItem">
                  <label>employeename</label>
                  <input
                    type="text"
                    placeholder=""
                    className="employeeUpdateInput"
                  />
                </div>
                <div className="employeeUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="employeeUpdateInput"
                  />
                </div>
                <div className="employeeUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder=""
                    className="employeeUpdateInput"
                  />
                </div>
                <div className="employeeUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder=""
                    className="employeeUpdateInput"
                  />
                </div>
                <div className="employeeUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Akhand Bharat"
                    className="employeeUpdateInput"
                  />
                </div>
              </div>
              <div className="employeeUpdateRight">
                <div className="employeeUpdateUpload">
                  <img
                    className="employeeUpdateImg"
                    src="https://varnam.my/wp-content/uploads/2021/01/FB_IMG_1605666747087-2.jpg"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="employeeUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="employeeUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  