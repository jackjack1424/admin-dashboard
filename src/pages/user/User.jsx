import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
//import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Member</h1>
       
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://varnam.my/wp-content/uploads/2021/01/FB_IMG_1605666747087-2.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Chad Xavier</span>
              <span className="userShowUserTitle">Member</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ChadXavier</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">14-04-2001</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">920420420</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">chadxavier69@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Akhand Bharat</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
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
      
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://varnam.my/wp-content/uploads/2021/01/FB_IMG_1605666747087-2.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
