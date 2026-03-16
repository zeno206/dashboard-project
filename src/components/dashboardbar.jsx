import React from "react";
import { Link } from "react-router-dom";

function Dashboardbar() {
  return (
    <>
      <div className="dashbar">
        <div className="b-1">
          <h2 className="hh2">My Dashbaord</h2>
        </div>
        <div className="b-2">
          <nav>
            <Link className="nav-link" to={"/"}>
              <i class="ri-home-5-line"></i>Main Dashboard
            </Link>
            <br />
            <Link className="nav-link" to={"/3"}>
              <i class="ri-user-fill"></i>Profile
            </Link>
            <br />
            <Link className="nav-link" to={"/5"}>
              <i class="ri-speak-ai-fill"></i>RTL Admin
            </Link>
            <br />
            <Link className="nav-link" to={"/2"}>
              <i class="ri-shopping-cart-line"></i>Orders
            </Link>
            <br />
            <Link className="nav-link" to={"/1"}>
              <i class="ri-store-2-line"></i>NFT Marketplace
            </Link>
            <br />
          </nav>
        </div>
      </div>
    </>
  );
}

export default Dashboardbar;
