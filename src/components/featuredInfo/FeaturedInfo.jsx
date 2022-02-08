import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">New Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">17</span>
          <span className="featuredMoneyRate">
            11.4 <ArrowUpward  className="featuredIcon negative"/>
          </span>


        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">New Registrations</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5</span>
          <span className="featuredMoneyRate">
            6.4 <ArrowUpward className="featuredIcon negative"/>
          </span>




        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Bounce Rate</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">7%</span>
          <span className="featuredMoneyRate">
            -2.4 <ArrowDownward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
        
      </div>
    </div>
  );
}
