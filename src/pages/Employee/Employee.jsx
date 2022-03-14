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
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="userUpdateInput" required
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="last Name"
                  className="userUpdateInput" required
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email" className="userUpdateInput" required
                />
              </div>
              <div className="userUpdateItem">
          <label>Password</label>
          <input type="password" placeholder="password" className="userUpdateInput" required />
        
        </div>
        <div className="newUserItem">
          <label>Employee type</label>
          <select name="employee type" required>
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div className="userUpdateItem">
          <label>Date of birth</label>
          <input type="date" max={"2004-01-01"} className="userUpdateInput" required />
        </div>

        <div className="userUpdateItem">
          <label>Address</label>
          <input type="text" placeholder="Address" className="userUpdateInput" required/>
        </div>
        <div className="userUpdateItem">
          <label>State</label>
          <input type="text" placeholder="State" className="userUpdateInput" required/>
        </div>
        <div className="userUpdateItem">
          <label>Zip code</label>
          <input type="number" placeholder="Zip code" min={"6"} max={"6"} className="userUpdateInput" required/>
        </div>
        <div className="userUpdateItem">
          <label>Primary Phone</label>
          <input type="number" placeholder="primary phone" min={"10"} max={"10"} className="userUpdateInput" required/>
        </div>
        <div className="userUpdateItem">
          <label>Additional Phone</label>
          <input type="number" placeholder="additional phone" min={"10"} max={"10"} className="userUpdateInput" />
        </div>
        <div className="userUpdateItem">
          <label>Emergency Contact Name</label>
          <input type="text" placeholder="Emergency Contact Name"  className="userUpdateInput" required/>
        </div>
        <div className="userUpdateItem">
          <label>Emergency Contact Phone</label>
          <input type="number" placeholder="Emergency Contact Phone" min={"10"} max={"10"} className="userUpdateInput" required/>
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
  