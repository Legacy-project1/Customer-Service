import React from "react";
import { Tabs } from "antd";
// import Products from "./Products";
import Userinput from "../../components/UserInput";
import GeneralPage from "../../components/General";
function Profile() {
  return (
    <div className="profile " >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Form" key="1">
         {/* <Products></Products> */}
         <Userinput />
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="Bids" key="2">
        

        </Tabs.TabPane> */}
        <Tabs.TabPane tab="General" key="3">
          <GeneralPage/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
