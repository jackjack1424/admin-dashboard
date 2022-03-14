import "./newPackage.css";
export default function NewUser() {
    return (
      <div className="newUser">
        <h1 className="newUserTitle">New Package</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Package Name</label>
            <input type="text" placeholder="" />
          </div>
          
          
          <div className="newPackageRateItem">
            <label>Package Rate</label>
            <input type="password" placeholder="Amount" />
          </div>
          
          <div className="newPackageDescriptionItem">
            <label>Package Description</label>
            <input type="text" placeholder="Info" />
          </div>
         
         
          <button className="newPackageButton">Create</button>
        </form>
      </div>
    );
  }
  