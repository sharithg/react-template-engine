import React from "react";
import "./Home.css";
import { Card, ButtonIcon } from "../../components";
import Purchase from "../Purchase/Purchase";
import Data from "../Data/Data";
import Generate from "../Generate/Generate";
import RecentOrders from "../RecentOrders/RecentOrders";

export default function Home() {
  return (
    <div className="home">
      <div className="w__60">
        <Generate />
        <Card>
          <RecentOrders />
        </Card>

        <Card>
          <h1>Support</h1>
          <p className="support__para">
            If you have any questions, feel free to join our Discord and make a
            ticket. You can also find us on Twitter
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ButtonIcon title="Discord" icon="discord" />
            <div style={{ marginRight: 7 }} />
            <ButtonIcon title="Twitter" icon="twitter" />
          </div>
        </Card>
      </div>

      <div className="w__40">
        <Card>
          <Data />
        </Card>
        {/* Purchasing proxies */}
        <Card>
          <Purchase />
          {/* {currentBuyingPrice} */}
        </Card>
      </div>
    </div>
  );
}
