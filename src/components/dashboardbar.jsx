import React from "react";
import { Link } from "react-router-dom";

function Dashboardbar(){
    return(
        <>
           <div className="dashbar">
            <div className="b-1">
                <h2 className="hh2">My Dashbaord</h2>
            </div>
            <div className="b-2">
                <nav>
                <Link to={'/'}><i class="ri-home-5-line"></i>Main Dashboard</Link><br/>
                 <Link to={'/1'}><i class="ri-shopping-cart-2-line"></i>NFT Marketplace</Link><br/>
                  <Link to={'/2'}><i class="ri-bar-chart-2-line"></i>Data Tables</Link><br/>
                   <Link to={'/3'}><i class="ri-user-fill"></i>Profile</Link><br/>
                    <Link to={'/4'}><i class="ri-lock-2-line"></i>Sign in</Link><br/>
                     <Link to={'/5'}><i class="ri-speak-ai-fill"></i>RTL Admin</Link><br/>
                     </nav>

            </div>
        </div>
        </>
   
    )
}

export default Dashboardbar